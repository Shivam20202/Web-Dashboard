export interface Project {
  id: number;
  title: string;
  description: string;
  subject: string;
  author: string;
  image: string;
}

export interface User {
  name: string;
  role: string;
  avatar: string;
}