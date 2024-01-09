import {
  About,
  Banner,
  Features,
  Products,
  Serivces,
  TrustedCompany,
  Testimonials,
  ContactUs,
} from "./ui/components";
import BrandLogo from "./ui/assets/brand_logo.svg";
// interface AboutProps {
//   logo?: any;
//   MainText: JSX.Element;
//   optionalText?: string;
//   imageSrc: string;
//   reverse?: boolean;
//   spreatedText: string;
//   spreatedNuber: string;
//   sahpeDesign: string;
// }

const mainAbout = {
  logo: BrandLogo,
  MainText: (
    <>
      <div className="w-[650px]">
        <span className="text-white text-4xl font-semibold">نحن </span>
        <span className="text-teal-500 text-4xl font-semibold">
          مجموعة من الخبراء
        </span>
        <span className="text-white text-4xl font-semibold">
          {" "}
          الذين يتطلعون إلى مساعدة الشركات على الاستفادة من التكنولوجيا للقيام
          بأكثر مما كانوا يعتقدون أنه ممكن.
        </span>
      </div>
    </>
  ),
  optionalText:
    "نقوم بذلك من خلال عدد من الخدمات لتوفير حلول شاملة لأعمالك. قم بالتمرير لأسفل لقراءة ما يمكننا القيام به من أجلك.",
  imageSrc: "/images/home/about.png",
  spreatedText: "من نحن",
  spreatedNuber: "01",
  sahpeDesign:
    "w-[519.95px] h-[340.52px] origin-top-left rotate-[176.09deg] rounded-[10px] shadow border-4 border-teal-500 left-[519.95px] top-[340.52px] absolute",
  shapeParentDesign:
    "w-[541.95px] h-[375.16px] justify-center items-center inline-flex relative",
};

const aboutSections = [
  {
    id: 1,
    logo: BrandLogo,
    MainText: (
      <>
        <div className="w-[650px]">
          <span className="text-white text-4xl font-semibold">نحن </span>
          <span className="text-teal-500 text-4xl font-semibold">
            مجموعة من الخبراء
          </span>
          <span className="text-white text-4xl font-semibold">
            {" "}
            الذين يتطلعون إلى مساعدة الشركات على الاستفادة من التكنولوجيا للقيام
            بأكثر مما كانوا يعتقدون أنه ممكن.
          </span>
        </div>
      </>
    ),
    optionalText:
      "نقوم بذلك من خلال عدد من الخدمات لتوفير حلول شاملة لأعمالك. قم بالتمرير لأسفل لقراءة ما يمكننا القيام به من أجلك.",
    imageSrc: "/images/home/about.png",
    spreatedText: "من نحن",
    spreatedNuber: "01",
    sahpeDesign:
      "w-[519.95px] h-[340.52px] origin-top-left rotate-[176.09deg] rounded-[10px] shadow border-4 border-teal-500 left-[519.95px] top-[340.52px] absolute",
    shapeParentDesign:
      "w-[541.95px] h-[375.16px] justify-center items-center inline-flex relative",
  },
  {
    id: 2,
    logo: BrandLogo,
    MainText: (
      <>
        <div className="w-[650px]">
          <span className="text-white text-4xl font-semibold">نحن </span>
          <span className="text-teal-500 text-4xl font-semibold">
            مجموعة من الخبراء
          </span>
          <span className="text-white text-4xl font-semibold">
            {" "}
            الذين يتطلعون إلى مساعدة الشركات على الاستفادة من التكنولوجيا للقيام
            بأكثر مما كانوا يعتقدون أنه ممكن.
          </span>
        </div>
      </>
    ),
    optionalText:
      "نقوم بذلك من خلال عدد من الخدمات لتوفير حلول شاملة لأعمالك. قم بالتمرير لأسفل لقراءة ما يمكننا القيام به من أجلك.",
    imageSrc: "/images/home/about.png",
    spreatedText: "من نحن",
    spreatedNuber: "01",
    sahpeDesign:
      "w-[519.95px] h-[340.52px] origin-top-left rotate-[176.09deg] rounded-[10px] shadow border-4 border-teal-500 left-[519.95px] top-[340.52px] absolute",
    shapeParentDesign:
      "w-[541.95px] h-[375.16px] justify-center items-center inline-flex relative",
  },
  {
    id: 3,
    logo: BrandLogo,
    MainText: (
      <>
        <div className="w-[650px]">
          <span className="text-white text-4xl font-semibold">نحن </span>
          <span className="text-teal-500 text-4xl font-semibold">
            مجموعة من الخبراء
          </span>
          <span className="text-white text-4xl font-semibold">
            {" "}
            الذين يتطلعون إلى مساعدة الشركات على الاستفادة من التكنولوجيا للقيام
            بأكثر مما كانوا يعتقدون أنه ممكن.
          </span>
        </div>
      </>
    ),
    optionalText:
      "نقوم بذلك من خلال عدد من الخدمات لتوفير حلول شاملة لأعمالك. قم بالتمرير لأسفل لقراءة ما يمكننا القيام به من أجلك.",
    imageSrc: "/images/home/about.png",
    spreatedText: "من نحن",
    spreatedNuber: "01",
    sahpeDesign:
      "w-[519.95px] h-[340.52px] origin-top-left rotate-[176.09deg] rounded-[10px] shadow border-4 border-teal-500 left-[519.95px] top-[340.52px] absolute",
    shapeParentDesign:
      "w-[541.95px] h-[375.16px] justify-center items-center inline-flex relative",
  },
];
// const AboutSections = [
//   {
//     MainText: JSX.Element;
//     optionalText?: string;
//     imageSrc: string;
//     reverse?: boolean;
//     spreatedText: string;
//     spreatedNuber: string;
//     sahpeDesign: string;
//   }
// ]
import { Spreated } from "@/app/ui/components";
export default async function Page() {
  return (
    <>
      <About {...mainAbout} />
      <TrustedCompany />

      {aboutSections.map((about) => (
        <About {...about} />
      ))}

      {/* <Banner />
      
      <Features />

      <Spreated num="02" title="ماذا نفعل" />
      <Products />
      <Serivces />
      <Testimonials />
      <ContactUs /> */}
    </>
  );
}
