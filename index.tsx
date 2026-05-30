/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: '#fee2e2', color: '#991b1b', fontFamily: 'monospace', minHeight: '100vh' }}>
          <h2>Something went wrong rendering the Applet:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fca5a5', padding: '15px', borderRadius: '5px' }}>
            {this.state.error?.toString()}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

// Catches unhandled promise rejections and script errors outside of React
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    const errorContainer = document.createElement('div');
    errorContainer.style.position = 'fixed';
    errorContainer.style.top = '0';
    errorContainer.style.left = '0';
    errorContainer.style.width = '100vw';
    errorContainer.style.height = '100vh';
    errorContainer.style.background = '#fef2f2';
    errorContainer.style.color = '#991b1b';
    errorContainer.style.padding = '30px';
    errorContainer.style.boxSizing = 'border-box';
    errorContainer.style.zIndex = '999999';
    errorContainer.style.fontFamily = 'monospace';
    errorContainer.style.overflow = 'auto';

    errorContainer.innerHTML = `
      <h1 style="margin-top:0">Script Error Detected:</h1>
      <pre style="background:#fee2e2; padding:15px; border-radius:6px; overflow:auto">${event.message || 'Unknown syntax or runtime error'}</pre>
      <p>Source: ${event.filename}:${event.lineno}:${event.colno}</p>
      <pre style="font-size:12px">${event.error ? event.error.stack : 'No stack trace available'}</pre>
    `;
    document.body.appendChild(errorContainer);
  });

  window.addEventListener('unhandledrejection', (event) => {
    const errorContainer = document.createElement('div');
    errorContainer.style.position = 'fixed';
    errorContainer.style.top = '0';
    errorContainer.style.left = '0';
    errorContainer.style.width = '100vw';
    errorContainer.style.height = '100vh';
    errorContainer.style.background = '#fffbeb';
    errorContainer.style.color = '#92400e';
    errorContainer.style.padding = '30px';
    errorContainer.style.boxSizing = 'border-box';
    errorContainer.style.zIndex = '999999';
    errorContainer.style.fontFamily = 'monospace';
    errorContainer.style.overflow = 'auto';

    errorContainer.innerHTML = `
      <h1 style="margin-top:0">Unhandled Promise Rejection:</h1>
      <pre style="background:#fef3c7; padding:15px; border-radius:6px; overflow:auto">${event.reason ? event.reason.toString() : 'Unknown promise rejection reason'}</pre>
      <pre style="font-size:12px">${event.reason && event.reason.stack ? event.reason.stack : 'No stack trace available'}</pre>
    `;
    document.body.appendChild(errorContainer);
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);