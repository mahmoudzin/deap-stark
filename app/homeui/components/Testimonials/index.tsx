"use client";
import Slider from "react-slick";
import { Container, SpecialIconToSection, Spreated } from "@/app/ui/components";
import SpreatedLine from "@/app/ui/components/Spreated";
import Image from "next/image";
import Quote from "./assets/quote.svg";
const slick_element_style = {
  display: "flex",
  justifyContent: "center", // Horizontal centering
  alignItems: "center", // Vertical centering
  /* Other styles as needed */
};
const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default function Testimonials() {
  return (
    <Container
      extraElement={
        <div
          className="absolute "
          style={{
            width: "100%",
            height: "100%",
            transform: "rotate(112.81deg)",
            transformOrigin: "0 0",
            background: "#0BA89F",
            boxShadow: "800px 800px 800px ",
            borderRadius: 9999,

            filter: "blur(800px)",
          }}
        />
      }
    >
      {/* Spreated */}
      <SpreatedLine num={"04"} title={"الاراء والتعليقات"} />
      {/* Head */}
      <Head />
      {/* body */}
      <Body />
    </Container>
  );
}

function Head() {
  return (
    <div className="mb-[115px] mt-[70px]">
      <div className="flex gap-[40px]">
        <SpecialIconToSection />
        <div className="w-[640px]">
          <h3 className="text-white font-semibold text-3xl leading-normal mb-6">
            الشهادات - التوصيات.
            <br />
            محبوب من قبل الناس
          </h3>
          <p className="text-gray-400 font-semibold text-base leading-normal">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonialsData = [
  {
    id: 1,
    imgSrc: "/images/home/testimonial/person-1.png",
    comment: "Perfect. Just perfect! I can’t say anything.",
    name: "Marina J.",
    job_title: "HR Officer",
  },
  {
    id: 2,
    imgSrc: "/images/home/testimonial/person-1.png",
    comment: "Perfect. Just perfect! I can’t say anything.",
    name: "Marina J.",
    job_title: "HR Officer",
  },
  {
    id: 3,
    imgSrc: "/images/home/testimonial/person-1.png",
    comment: "Perfect. Just perfect! I can’t say anything.",
    name: "Marina J.",
    job_title: "HR Officer",
  },
  {
    id: 4,
    imgSrc: "/images/home/testimonial/person-1.png",
    comment: "Perfect. Just perfect! I can’t say anything.",
    name: "Marina J.",
    job_title: "HR Officer",
  },
  {
    id: 5,
    imgSrc: "/images/home/testimonial/person-1.png",
    comment: "Perfect. Just perfect! I can’t say anything.",
    name: "Marina J.",
    job_title: "HR Officer",
  },
];

function Body() {
  return (
    // <div className="flex gap-8">
    <Slider {...settings}>
      {testimonialsData.map((item) => (
        <TestimonialCard key={item.id} {...item} />
      ))}
    </Slider>

    // </div>
  );
}

interface TestimonialCardProps {
  imgSrc: string;
  comment: string;
  name: string;
  job_title: string;
}

function TestimonialCard({
  imgSrc,
  comment,
  name,
  job_title,
}: TestimonialCardProps) {
  return (
    <div className="h-[365px] flex flex-col justify-end">
      <div className="relative px-3 ">
        {/* img */}
        <Image
          src={imgSrc}
          width={103}
          height={103}
          className="rounded-full absolute top-[-51.5px] left-1/2 transform -translate-x-1/2 w-[103px] h-[103px]"
          alt={name}
        />
        {/* fixed icon */}
        <div className="text-center pt-[88.5px]  px-10 h-[307px] flex-shrink-0 rounded-10 bg-gradient-to-b from-gray-900 to-gray-900 bg-no-repeat bg-cover">
          <Image
            src={Quote}
            width={50}
            height={43}
            className="inline mb-8"
            alt="Testimonial Icon"
            style={{ display: "inline" }}
          />
          {/* comment */}
          <p className="text-white font-bold text-2xl mb-8">{comment}</p>
          {/* name */}
          <p className="text-gray-400  font-bold text-base">{name}</p>

          {/* job title */}
          <p className="text-gray-400 text-base pb-4">{job_title}</p>
        </div>
      </div>
    </div>
  );
}
