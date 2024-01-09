import Image from "next/image";
import React from "react";
import { ServicesChoice, ServiceComponent } from "./ui/components";

export default function Page() {
  return (
    <>
      {/* Head */}
      <Head />
      {/* Choce ur Sewrvice section */}
      <ServicesChoice />
      {/* Sircal component  */}
      <ServiceComponent />
    </>
  );
}

function Head() {
  return (
    <div className="mb-[52px]">
      <h1 className="text-white font-semibold text-3xl mb-4">خدماتنا</h1>
      <div className="text-gray-300  font-semibold text-base leading-[1.33] tracking-tighter">
        تم تصميم مجموعتنا من الخدمات المميزة لمساعدتك لتحقيق هدفك .
      </div>
    </div>
  );
}
