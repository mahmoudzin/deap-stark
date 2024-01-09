"use client";
import Slider from "react-slick";
import Image from "next/image";
import React from "react";
import { Container } from "@/app/ui/components";

const slick_element_style = {
  display: "flex",
  justifyContent: "center", // Horizontal centering
  alignItems: "center", // Vertical centering
  /* Other styles as needed */
};
const companiesArray = [
  "/images/brands/brand-1.png",
  "/images/brands/brand-2.png",
  "/images/brands/brand-3.png",
  "/images/brands/brand-4.png",
  "/images/brands/brand-5.png",
  "/images/brands/brand-6.png",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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
const TrustedCompany = () => {
  return (
    <Container containerClasses="text-center">
      <div className="text-white text-[2rem] font-semibold leading-10 tracking-tight mb-[52px]">
        موثوق بنا من قبل أكثر من 150.000 شركة
      </div>
      {/* <div className="justify-between items-center gap-6 inline-flex mb-[52px]"> */}
      <div className="mb-20">
        <Slider {...settings}>
          {companiesArray.map((src, index) => (
            <div key={index}>
              <div
                className="w-full md:w-[170px] h-[85px]"
                style={slick_element_style}>
                <Image src={src} alt="brand log" width={170} height={72} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* </div> */}
      <Slider {...settings}>
        {companiesArray.map((src, index) => (
          <div key={index}>
            <div
              className="w-full md:w-[170px] h-[85px]"
              style={slick_element_style}>
              <Image src={src} alt="brand log" width={170} height={72} />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TrustedCompany;
