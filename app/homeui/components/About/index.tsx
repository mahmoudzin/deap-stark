import {
  Container,
  FlexResponsive,
  SectionBtnWithRoute,
  SpecialIconToSection,
  SpecialText,
  Spreated,
} from "@/app/ui/components";
import Image from "next/image";

import MarkupIcon from "./assets/right_mark.svg";

export default function About() {
  return (
    <Container extraClasses="bg-[#010108] relative py-7">
      <div
        className="absolute"
        style={{
          width: 397.32,
          height: 397.32,
          transform: "rotate(112.81deg)",
          transformOrigin: "0 0",
          background: "#0BA89F",
          boxShadow: "800px 800px 800px ",
          borderRadius: 9999,
          filter: "blur(800px)",
        }}
      />
      <Spreated num="01" title="من نحن" />
      <div className="mt-12">
        <IntroSection />
        <TheRestOfSection />
      </div>
    </Container>
  );
}

function IntroSection() {
  return (
    <FlexResponsive
      gapCol="gap-[3.5rem]"
      gapRow="gap-[3.5rem]"
      extraClasses="items-center lg:items-start lg:justify-between mb-[64px] w-full">
      <div className="flex gap-[3.5rem]">
        <SpecialIconToSection />
        <div className="w-full md:w-[650px] text-4xl">
          <p className="text-white text-4xl font-semibold mb-[60px]">
            نحن
            <SpecialText text=" مجموعة من الخبراء " textSize="text-4xl" />
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
    </FlexResponsive>
  );
}
const texts = [
  "نحن نركز دائمًا على التميز التقني",
  "أينما ذهبت، نجلب لك الأفكار والإثارة",
  "نحن نركز دائمًا على التميز التقنينحن مستشارون وشركاء للعلامات التجارية",
];

function TheRestOfSection() {
  return (
    <FlexResponsive
      gapCol=" gap-7"
      gapRow="gap-7"
      extraClasses="lg:justify-between items-center">
      <div className="w-full md:w-[541.95px] md:h-[375.16px] relative text-center">
        <div
          className="hidden md:block w-[499.95px]
          h-[320.52px]
          left-[521.95px]
          top-[319.73px] md:w-[519.95px] md:h-[340.52px] md:left-[541.95px] md:top-[339.73px] absolute origin-top-left rotate-[176.09deg]"
          style={{
            borderRadius: "10px",
            background: "linear-gradient(180deg, #01D799 0%, #079DE5 100%)",
            boxShadow:
              "-1.15px 1.836px 5.352px 0px rgba(1, 214, 152, 0.16), -5.062px 8.078px 11.081px 0px rgba(1, 214, 152, 0.13), -12.425px 19.829px 22.1px 0px rgba(1, 215, 153, 0.11), -23.93px 38.189px 43.319px 0px rgba(1, 216, 153, 0.13), -40.266px 64.26px 79.648px 0px rgba(1, 214, 153, 0.10), -62.125px 99.144px 136px 0px rgba(1, 215, 154, 0.00)",
          }}
        />
        <Image
          src="/images/home/about.png"
          className="hidden md:block w-[474.44px] h-[299.51px] left-[32.11px] top-[35.66px] absolute rounded-[10px] object-cover object-center"
          width={474}
          height={299}
          alt="about section"
        />
        <Image
          src="/images/home/about.png"
          className="md:hidden w-[300px] h-[180.51px]  rounded-[10px] object-cover object-center inline"
          width={300}
          height={180}
          alt="about section"
        />
      </div>

      <div className="">
        <div className="mb-[82px] flex flex-col gap-3">
          {texts.map((text) => (
            <ListItem key={text} text={text} />
          ))}
        </div>

        <div className="w-full h-[62px] rtl:text-left ltr:text-right">
          <span className="text-teal-500 text-xl font-semibold font-['Inter']">
            Mohamed Mamoud
            <br />
          </span>
          <span className="text-stone-300 text-xl font-normal font-['Inter']">
            CEO, Deep stark
          </span>
        </div>
      </div>
    </FlexResponsive>
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
