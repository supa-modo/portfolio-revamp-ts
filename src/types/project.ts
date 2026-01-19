export interface Project {
  name: string;
  description: string;
  tags: string[];
  images: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface ProjectImageMap {
  [key: string]: string[];
}
