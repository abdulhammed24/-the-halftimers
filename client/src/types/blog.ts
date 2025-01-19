export interface BlogPost {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  category: string[];
  imageSrc: string;
  author: {
    _id: string;
    name: string;
  };
  date: string;
  createdAt: string;
  updatedAt: string;
  readTime: string;
  views: number;
  comments: string[];
  likes: number;
  slug: string;
}
