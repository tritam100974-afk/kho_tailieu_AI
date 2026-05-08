export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: "coban" | "meo" | "daoduc" | "congcu" | "tuonglai";
  content: string;
  readTime: string;
}

export type Category = {
  id: "coban" | "meo" | "daoduc" | "congcu" | "tuonglai";
  label: string;
  color: string;
  icon: string;
};
