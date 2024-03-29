import { Container, Spreated } from "@/app/ui/components";
import Image from "next/image";

interface AboutProps {
  logo?: string;
  MainText: JSX.Element;
  optionalText?: string;
  imageSrc: string;
  reverse?: boolean;
  spreatedText: string;
  spreatedNuber: string;
  sahpeDesign: string;
  shapeParentDesign: string;
}

interface TextSectionProps {
  children: JSX.Element;
  optionalText?: string;
  logo?: string;
}

interface ImageSectionProps {
  imageSrc: string;
  sahpeDesign: string;
  shapeParentDesign: string;
}

export default function About({
  logo,
  MainText,
  imageSrc,
  reverse = false,
  optionalText,
  spreatedText,
  spreatedNuber,
  sahpeDesign,
  shapeParentDesign,
}: AboutProps) {
  return (
    <Container>
      <Spreated num={spreatedNuber} title={spreatedText} reverse={reverse} />
      <div
        className={`flex mt-[50px] justify-between ${
          reverse && "flex-row-reverse"
        } first-line:mt-12 mb-[100px]`}
      >
        <TextSection {...{ logo, optionalText }}>{MainText}</TextSection>
        <ImageSection {...{ imageSrc, sahpeDesign, shapeParentDesign }} />
      </div>
    </Container>
  );
}

function TextSection({ children, optionalText, logo }: TextSectionProps) {
  return (
    <div className="flex flex-col justify-between mb-[64px] max-w-[650px]">
      {logo && <Image src={logo} alt="Brand Logo" width={37} height={54} />}
      {children}
      {optionalText && (
        <p className="text-stone-300 text-xl font-semibold">{optionalText}</p>
      )}
    </div>
  );
}

function ImageSection({
  imageSrc,
  sahpeDesign,
  shapeParentDesign,
}: ImageSectionProps) {
  return (
    <div className={shapeParentDesign}>
      <div className={sahpeDesign} />
      <Image
        src={imageSrc}
        className="w-[474.44px] h-[299.51px] left-[6px] top-[40px] absolute rounded-[10px] border-2"
        width={474}
        height={299}
        alt="about section"
      />
    </div>
  );
}
