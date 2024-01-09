import BlogsList from "./ui/components/BlogList";

import { blogs } from "@/app/data/blogs";

export default function Page() {
  return (
    <>
      {/*header  */}
      <div className="mb-[34px]">
        <h1 className="text-white  font-semibold text-3xl leading-normal mb-4">
          مدونتنا
        </h1>
        <p className="text-gray-300  font-semibold text-base leading-[1.33] tracking-tighter">
          تم تصميم مجموعتنا من الخدمات المميزة لمساعدتك لتحقيق هدفك .
        </p>
      </div>

      {/* Blog List */}
      <BlogsList {...{ blogs }} />
    </>
  );
}
