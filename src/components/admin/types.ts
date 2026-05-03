export interface Message {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  companyType: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface Portfolio {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  description?: string;
  services?: string;
  content: { type: string; src: string }[];
  createdAt: string;
}

export interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  readTime: string;
  published: boolean;
  createdAt: string;
}

export interface ContentItem {
  type: string;
  src: string;
  span?: number; // 1 (1/3), 2 (2/3), 3 (full)
}
