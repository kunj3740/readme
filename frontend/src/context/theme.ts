import { createContext, useContext } from "react";

// Define the Blog interface

// Define the context type
interface BlogContextType {
  blogs: Blog[];
  getBlogs: () => Blog[];
}
interface Blog {
    content: string;
    title: string;
    id: number;
    publishedDate: Date;
    author: {
        name: string;
    };
  }
// Create the context with default values
export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  getBlogs: () => [],
});

export const BlogProvider = BlogContext.Provider;

export default function useContextedBlogs() {
  return useContext(BlogContext);
}
