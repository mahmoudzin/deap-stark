import { SpecialIconToSection, Spreated } from "@/app/ui/components";
import iocn1 from "./assets/icon-1.svg";
import icon2 from "./assets/icon-2.svg";
import icon3 from "./assets/icon-3.svg";
import icon4 from "./assets/icon-4.svg";
import icon5 from "./assets/icon-5.svg";
import icon6 from "./assets/icon-6.svg";

import Image from "next/image";
export default function Services() {
  return (
    <div className="my-[100px]">
      <Spreated num="03" title="الخدمات لدينا" center={true} />
      <SecHead />
      <ProductsRow />
    </div>
  );
}

function SecHead() {
  return (
    <div className="text-center mt-[30px]">
      <div className="mb-8">
        <div className="text-center">
          <span className="text-white text-4xl font-bold">خدماتنا </span>
          <span className="text-teal-500 text-4xl font-bold">
            الشاملة ستغطي جميع{" "}
          </span>
          <span className="text-white text-4xl font-bold">احتياجاتك.</span>
        </div>

        <div className="text-center">
          <div className="w-[45%] mx-auto text-stone-300 text-base font-semibold leading-relaxed">
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
    <div className="flex justify-between flex-wrap">
      {services.map((ser: IServices) => (
        <ServiceCard key={ser.title} {...ser} />
      ))}
    </div>
  );
}

function ServiceCard({ title, icon }: IServices) {
  return (
    <div className="w-1/3 mt-[60px] ">
      <div className="w-1/2 mx-auto">
        <div className="relative mb-1">
          <Image
            className=""
            src={icon}
            alt="Placeholder Image"
            width={50}
            height={50}
          />
        </div>
        <div className="  text-teal-500 text-xl font-semibold mb-1">
          {title}
        </div>
        <div className=" text-white text-base font-semibold">أطلب الأن</div>
      </div>
    </div>
  );
}
