import Image from "next/image";
import React from "react";
import { Map, ContactForm, DaysWork, QuestionList } from "./ui/components";

export default function Page() {
  return (
    <>
      {/* Head */}
      <Head />
      {/* MAP Section */}
      <Map />
      {/*  Form Section */}
      <ContactForm />
      {/*  Days Work Section */}
      <DaysWork />
      {/*  Imag Section */}
      {/*  Question Section */}
      <QuestionList />
    </>
  );
}

function Head() {
  return (
    <div className="mb-[52px]">
      <h1 className="text-white font-semibold text-3xl mb-4">كن علي تواصل</h1>
      <div className="text-gray-300  font-semibold text-base leading-[1.33] tracking-tighter">
        تواصل معنا اليوم ودعنا نساعدك في الرد على أي أسئلة أو استفسارات قد تكون
        لديك.
      </div>
    </div>
  );
}



