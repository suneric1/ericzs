export interface Post {
  name: string;
  title: string;
  thumbnail: string;
  size: 1 | 2;
  info: {
    role: string;
    context: string;
    skills: string[];
    links?: { [text: string]: string };
  };
  category: string;
  time: string;
  tags: Tag[];
  body: PostBlock[];
}

export type Tag =
  | 'ux'
  | 'front end'
  | 'back end'
  | 'mobile'
  | 'angular'
  | 'vr'
  | 'game dev'
  | 'experience'
  | 'arduino'
  | 'data vis'
  | 'infographics';

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
