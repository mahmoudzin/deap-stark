import {
  Container,
  FlexResponsive,
  SpecialIconToSection,
  SpecialText,
  Spreated,
} from "@/app/ui/components";
import iocn1 from "./assets/icon-1.svg";
import icon2 from "./assets/icon-2.svg";
import icon3 from "./assets/icon-3.svg";
import icon4 from "./assets/icon-4.svg";
import icon5 from "./assets/icon-5.svg";
import icon6 from "./assets/icon-6.svg";

import Image from "next/image";
import Link from "next/link";
export default function Services() {
  return (
    <Container
      extraClasses="bg-[url('/images/home/services/bg-services.png')] bg-[#010108] bg-cover bg-no-repeat bg-center pt-[100px] pb-[50px]"
      extraElement={
        <svg
          className="absolute top-[50%] translate-y-[-50%] z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="590"
          height="953"
          viewBox="0 0 590 953"
          fill="none">
          <g filter="url(#filter0_f_61_504)">
            <circle
              cx="476.5"
              cy="476.5"
              r="126.5"
              fill="url(#paint0_linear_61_504)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_61_504"
              x="0"
              y="0"
              width="953"
              height="953"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="175"
                result="effect1_foregroundBlur_61_504"
              />
            </filter>
            <linearGradient
              id="paint0_linear_61_504"
              x1="603"
              y1="350"
              x2="332.552"
              y2="603"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#089FDA" />
              <stop offset="0.9999" stop-color="#02D39C" />
              <stop offset="1" stop-color="#089FDA" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      }>
      <Spreated num="03" title="الخدمات لدينا" center={true} />
      <SecHead />
      <ProductsRow />
    </Container>
  );
}

function SecHead() {
  return (
    <div className="text-center text-4xl text-white  font-bold mt-[30px]">
      <div className="mb-[100px]">
        <div className="mb-8">
          <span>خدماتنا </span>
          <SpecialText text=" الشاملة ستغطي جميع " textSize="text-4xl" />
          <br />
          <span>احتياجاتك.</span>
        </div>

        <div className="text-center">
          <div className="max-w-[600px] mx-auto text-stone-300 text-base font-semibold leading-relaxed">
            نحن لا نساعد فقط في تلبية احتياجات تكنولوجيا المعلومات الخاصة بك.
            نحن نركز على النظام البيئي بأكمله المحيط به. من خلال الجمع بين
            الأشخاص والعمليات والتكنولوجيا، نحن نفخر بتقديم الحلول التي تعمل في
            الواقع. ليست نظرية.
          </div>
        </div>
      </div>
    </div>
  );
}

interface IServices {
  title: string;
  icon: any;
}
const services: IServices[] = [
  {
    title: "تكامل الخدمات",
    icon: iocn1,
  },
  {
    title: "برامج مخصصة",
    icon: icon2,
  },
  {
    title: "استراتيجية نظم المعلومات",
    icon: icon3,
  },
  {
    title: "التسويق الرقمي",
    icon: icon4,
  },
  {
    title: "إدارة المحتوي",
    icon: icon5,
  },
  {
    title: "تطبيقات الويب والهواتف المحمولة",
    icon: icon6,
  },
];
function ProductsRow() {
  return (
    <FlexResponsive
      gapCol="gap-0"
      gapRow="gap-0"
      breakThrow="md:flex-row"
      extraClasses="justify-between flex-wrap">
      {services.map((ser: IServices) => (
        <ServiceCard key={ser.title} {...ser} />
      ))}
    </FlexResponsive>
  );
}

function ServiceCard({ title, icon }: IServices) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mt-[60px] ">
      <div className="text-center md:rtl:text-right md:ltr:text-left md:w-1/2 md:mx-auto">
        <div className="relative mb-1">
          <Image
            className="inline"
            src={icon}
            alt="Placeholder Image"
            width={50}
            height={50}
          />
        </div>
        <div className="  text-teal-500 text-xl font-semibold mb-1">
          {title}
        </div>
        <Link
          href="/services/id"
          className="flex items-center gap-1 text-white text-base font-semibold">
          <p>أطلب الأن</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 7L9 12L14 17"
              stroke="#00C1AC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
