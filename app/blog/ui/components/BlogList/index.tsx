import { BlogData } from "@/app/data/interfaces/blog";
import BlogCard from "../BlogCard";

const BlogsList = ({ blogs }: { blogs: BlogData[] }) => {
  return (
    <div className="row flex-wrap mb-[100px]">
      {blogs.map((blog: BlogData) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};
export default BlogsList;
