export interface Post {
  id: string;
  title: string;
  thumbnail: string;
  size: 1 | 2;
  info: {
    role: string;
    context: 'work' | 'school';
    skills: string[];
    links?: { [text: string]: string };
  };
  category: string;
  time: string;
  tags: Tag[];
  featured?: boolean;
  body?: PostBlock[];
  mdContent?: {
    zh: string;
    en: string;
  };
  originLang: 'en' | 'zh';
}

export type Tag =
  | 'design'
  | 'dev'
  | 'data_viz'
  | 'game'
  | 'vr'
  | 'experimental';

export type PostBlockType =
  | 'heading'
  | 'para'
  | 'image'
  | 'youtube'
  | 'ext-link'
  | 'quote';

export interface PostBlock {
  type: string;
  src?: any;
  caption?: string;
  text?: string;
  content?: string;
  quote?: string;
  by?: [text: string, url: string];
}
