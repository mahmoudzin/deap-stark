import Image from "next/image";
import DefaultIcon from "./assets/sec_icon.svg";

export default function SpecialIconToSection({ icon }: { icon?: any }) {
  return (
    <div className="flex justify-center items-center w-[57px] h-[57px] bg-teal-500 rounded-full shadow shadow-inner">
      <Image
        src={icon ? icon : DefaultIcon}
        width={27}
        height={27}
        alt="section icon"
      />
    </div>
  );
}
