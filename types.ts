/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export type Language = 'fr' | 'en';

export interface ProgramItem {
  time: string;
  title: string;
  description?: string;
  speakers?: string[];
  panellists?: string[];
  moderators?: string[];
  keynotes?: string[];
  tracks?: { name: string; title: string }[];
}

export interface ProgramDay {
  day: string;
  title: string;
  subtitle: string;
  items: ProgramItem[];
}

export interface Speaker {
  id?: string;
  name: string;
  role: string;
  institution: string;
  image: string;
  category: string;
}

export interface Exhibitor {
  name: string;
  sector: string;
  country: string;
  logo: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
}

export interface VideoItem {
  id: number;
  title: string;
  youtubeId: string;
  thumbnail: string;
}
