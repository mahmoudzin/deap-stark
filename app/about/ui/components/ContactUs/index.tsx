import { SectionBtnWithRoute, SpecialIconToSection, SpecialText } from "@/app/ui/components";
import Image from "next/image";
import MarkupIcon from "./assets/right_mark.svg";
import aboutSecIcon from "./assets/about-sec-icon.svg";

export default function About() {
  return (
    <div className="mt-12 mb-[100px]">
      <IntroSection />
      <TheRestOfSection />
    </div>
  );
}




function IntroSection() {
  return (
    <div className="flex justify-between mb-[64px] w-full">
      <div className="flex gap-[55px]">
        <SpecialIconToSection icon={aboutSecIcon} />
        <div className="w-[650px] text-4xl">
          <p className="text-white text-4xl font-semibold mb-[60px]">
            نحن
            <SpecialText text=" مجموعة من الخبراء " textSize="text-4xl"  />
            <span className="text-teal-500 text-4xl font-semibold"></span>
            الذين يتطلعون إلى مساعدة الشركات على الاستفادة من التكنولوجيا للقيام
            بأكثر مما كانوا يعتقدون أنه ممكن.
          </p>

          <p className=" text-stone-300 text-xl font-semibold">
            نقوم بذلك من خلال عدد من الخدمات لتوفير حلول شاملة لأعمالك. قم
            بالتمرير لأسفل لقراءة ما يمكننا القيام به من أجلك.
          </p>
        </div>
      </div>
      <SectionBtnWithRoute path={"/about"} text="مشاهدة المزيد" />
    </div>
  );
}
const texts = [
  "نحن نركز دائمًا على التميز التقني",
  "أينما ذهبت، نجلب لك الأفكار والإثارة",
  "نحن نركز دائمًا على التميز التقنينحن مستشارون وشركاء للعلامات التجارية",
];

function TheRestOfSection() {
  return (
    <div className="flex justify-between">
      <div className="w-[541.95px] h-[375.16px] relative">
        <div className="w-[519.95px] h-[340.52px] left-[541.95px] top-[339.73px] absolute origin-top-left rotate-[176.09deg] bg-gradient-to-b from-teal-500 to-sky-500 rounded-[10px] shadow border-2" />
        <Image
          src="/images/home/about.png"
          className="w-[474.44px] h-[299.51px] left-[32.11px] top-[35.66px] absolute rounded-[10px] border-2"
          width={474}
          height={299}
          alt="about section"
        />
      </div>

      <div className="">
        <div className="mb-[82px]">
          {texts.map((text) => (
            <ListItem key={text} text={text} />
          ))}
        </div>

        <div className="w-[238px] h-[62px]">
          <span className="text-teal-500 text-xl font-semibold font-['Inter']">
            Mohamed Mamoud
            <br />
          </span>
          <span className="text-stone-300 text-xl font-normal font-['Inter']">
            CEO, Deep stark
          </span>
        </div>
      </div>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-center">
      <Image src={MarkupIcon} width={21} height={21} alt="icon" />
      <p>{text}</p>
    </div>
  );
}
