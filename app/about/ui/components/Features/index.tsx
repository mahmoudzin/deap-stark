import Image from "next/image";
import OneIcon from "./assets/one.svg";
import TwoIcon from "./assets/two.svg";
import ThreeIcon from "./assets/Three.svg";
import ArrowDown from "./assets/arrow-down.svg";
interface SectionProps {
  gradientColor: string;
  text: string;
  circleGradient: string;
  icon: any;
}

const sections: SectionProps[] = [
  {
    gradientColor: "from-slate-900 to-indigo-950 ",
    text: "برنامج تم تصميمه مع وضع تجربة المستخدم في الاعتبار",
    circleGradient: "from-sky-500 via-teal-500 to-sky-500",
    icon: OneIcon,
  },
  {
    gradientColor: "from-slate-900 to-indigo-950",
    text: "حلول مخصصة مصممة لتلبية احتياجاتك",
    circleGradient: "from-sky-500 via-teal-500 to-sky-500",
    icon: TwoIcon,
  },
  {
    gradientColor: "from-slate-900 to-indigo-950",
    text: "الجمع بين الأشخاص والعمليات والتكنولوجيا",
    circleGradient: "from-sky-500 via-teal-500 to-sky-500",
    icon: ThreeIcon,
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="mt-8 mb-[50] flex items-center h-full">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <a href="#footer" className="flex justify-center">
        <Image src={ArrowDown} width={164} height={188} alt="banner icon" />
      </a>
    </>
  );
}

function Section({ gradientColor, text, circleGradient, icon }: SectionProps) {
  return (
    <>
      <div className="flex-1 mb-4 relative flex flex-col justify-center items-center min-h-full">
        <div
          className={`w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-bl ${circleGradient} custom-shadow border border-white mb-[50px]`}>
          <Image src={icon} width={48} height={38} alt="banner icon" />
        </div>

        <div
          className={`bg-gradient-to-b ${gradientColor} rounded-xl flex flex-col justify-center items-center px-[84px] py-[42px]`}
          style={{
            boxShadow: "0px -21px 30px 0px rgba(0, 193, 172, 0.30)",
          }}>
          <p
            className={`w-full text-white text-center font-semibold min-h-[85px] flex items-center`}>
            {text}
          </p>
        </div>
      </div>
      {/* Display text height for testing */}
    </>
  );
}
