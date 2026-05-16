import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { BLOG_POSTS_DATA } from "./blogData";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
  }

  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;
    const blogId = req.query.blog as string;

    try {
      let template: string;
      if (process.env.NODE_ENV !== "production") {
        template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(process.cwd(), "dist", "index.html"), "utf-8");
      }

      if (blogId) {
        const post = BLOG_POSTS_DATA.find(p => p.id === parseInt(blogId));
        if (post) {
          const protocol = req.headers['x-forwarded-proto'] || req.protocol;
          const host = req.get('host');
          
          let imageUrl = post.image;
          if (process.env.NODE_ENV === "production" && fs.existsSync(path.resolve(process.cwd(), "dist", ".vite", "manifest.json"))) {
            const manifest = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "dist", ".vite", "manifest.json"), "utf-8"));
            const assetKey = post.image.startsWith('/') ? post.image.slice(1) : post.image;
            if (manifest[assetKey]) {
              imageUrl = "/" + manifest[assetKey].file;
            }
          }

          const fullImageUrl = `${protocol}://${host}${imageUrl}`;
          
          template = template.replace(
            /<meta property="og:title" content="[^"]*" \/>/,
            `<meta property="og:title" content="${post.title.fr} | Biashara Afrika 2026" />`
          );
          template = template.replace(
            /<meta property="og:description" content="[^"]*" \/>/,
            `<meta property="og:description" content="${post.description.fr}" />`
          );
          template = template.replace(
            /<meta property="og:image" content="[^"]*" \/>/,
            `<meta property="og:image" content="${fullImageUrl}" />`
          );
          
          if (!template.includes('twitter:card')) {
             template = template.replace('</head>', `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${post.title.fr}" />
    <meta name="twitter:description" content="${post.description.fr}" />
    <meta name="twitter:image" content="${fullImageUrl}" />
  </head>`);
          }
        }
      } else {
        // Fix default og:image to be absolute and hashed if in production
        const protocol = req.headers['x-forwarded-proto'] || req.protocol;
        const host = req.get('host');
        let defaultImagePath = "/Images/Exploration.png";
        
        if (process.env.NODE_ENV === "production" && fs.existsSync(path.resolve(process.cwd(), "dist", ".vite", "manifest.json"))) {
            const manifest = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "dist", ".vite", "manifest.json"), "utf-8"));
            const assetKey = "Images/Exploration.png";
            if (manifest[assetKey]) {
                defaultImagePath = "/" + manifest[assetKey].file;
            }
        }
        
        template = template.replace(
          /<meta property="og:image" content="\/Images\/Exploration.png" \/>/,
          `<meta property="og:image" content="${protocol}://${host}${defaultImagePath}" />`
        );
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
