import Image from "next/image";
import React from "react";

interface CompanyProps {
  totalCompanies?: number;
}

const Company: React.FC = ({ src }: { src: string }) => {
  return (
    <div className="w-[170px] h-[72px] flex items-center px-[41]">
      <Image src={src} alt="brand log" width={170} height={72} />
    </div>
  );
};
const companiesArray = [
  "/images/brands/brand-1.png",
  "/images/brands/brand-2.png",
  "/images/brands/brand-3.png",
  "/images/brands/brand-4.png",
  "/images/brands/brand-5.png",
  "/images/brands/brand-6.png",
];
const TrustedCompany: React.FC<CompanyProps> = () => {
  return (
    <div className="text-center pb-[138px]">
      <div className="text-white text-[32px] font-semibold leading-10 tracking-tight mb-[52px]">
        موثوق بنا من قبل أكثر من 150.000 شركة
      </div>
      <div className="justify-between items-center gap-6 inline-flex mb-[52px]">
        {companiesArray.map((src, index) => (
          <Company key={index} src={src} />
        ))}
      </div>
      <div className="justify-between items-center gap-6 inline-flex">
        {companiesArray.map((src, index) => (
          <Company key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default TrustedCompany;
