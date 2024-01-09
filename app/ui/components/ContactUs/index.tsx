import React from "react";
import NameInputIcon from "./assets/name_input.svg";
import EmailInputIcon from "./assets/email_input.svg";
import PhoneInputIcon from "./assets/phone_input.svg";
import MessageInputIcon from "./assets/message_input.svg";
import img_shape_1 from "./assets/img_shape_1.svg";
import img_shape_2 from "./assets/img_shape_2.svg";
import img_shape_3 from "./assets/img_shape_3.svg";
import img_shape_4 from "./assets/img_shape_4.svg";

import Image from "next/image";
import { SectionBtnWithRoute, SpecialText } from "..";

// Define the interface for input objects
interface Input {
  name: string;
  type: string;
  iconSrc: any;
  placeholder: string;
  element?: string;
}

// Props for ContactFormInput component
interface ContactFormInputProps extends Input {
  element?: string;
}

// Define the props for ContactForm component
interface ContactFormProps {
  inputs: Input[];
}
const commonClasses = "flex rounded-10 bg-[#161E25] py-[25px]";
const imgClasses = "px-[24px]";
const inputClasses = "bg-transparent h-full outline-none";
// ContactFormInput component with TypeScript types
const ContectFormInput: React.FC<ContactFormInputProps> = ({
  name,
  type,
  iconSrc,
  placeholder,
  element,
}) => {
  return (
    <>
      {element === "textarea" ? (
        <div className={`h-[201px] ${commonClasses}`}>
          <div className={imgClasses}>
            <Image src={iconSrc} alt={name} width={30} height={30} />
          </div>

          <textarea
            name={name}
            style={{ width: "calc(100% - 64px)" }}
            className={inputClasses}
            placeholder={placeholder}></textarea>
        </div>
      ) : (
        <div className={`h-[79px] ${commonClasses}`}>
          <div className={imgClasses}>
            <Image src={iconSrc} alt={name} width={30} height={30} />
          </div>
          <input
            name={name}
            type={type}
            style={{ width: "calc(100% - 64px)" }}
            className={inputClasses}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

// ContactForm component with TypeScript types
const ContactForm: React.FC<ContactFormProps> = ({ inputs }) => {
  return (
    <form className="flex flex-col w-1/2 gap-3">
      {inputs.map((input) => (
        <ContectFormInput key={input.name} {...input} />
      ))}
      <div className="mt-3">
        <SectionBtnWithRoute text={"ارسال الان"} path="/" />
      </div>
    </form>
  );
};

// ContactImage component with TypeScript types
const ContactImage: React.FC = () => {
  return (
    <div className="relative h-[538px] w-[553px]">
      {/* layer */}
      <div className="absolute top-0 left-0 bottom-0 right-0 rounded-lg  z-10">
        <Image
          src={img_shape_1}
          alt="Contact"
          width={40}
          height={40}
          className="absolute top-[24px] left-[47px]"
        />
        <Image
          src={img_shape_2}
          alt="Contact"
          width={40}
          height={40}
          className="absolute bottom-[66px] right-[69px]"
        />
        <Image
          src={img_shape_3}
          alt="Contact"
          width={10}
          height={10}
          className="absolute top-[62px] right-[141px]"
        />
        <Image
          src={img_shape_4}
          alt="Contact"
          width={10}
          height={10}
          className="absolute bottom-[49px] left-[64px]"
        />
      </div>
      <Image
        src={"/images/home/contactus/image-1.png"}
        alt="Contact"
        className="relative z-0"
        width={553}
        height={538}
      />
    </div>
  );
};

const inputs: Input[] = [
  {
    name: "username",
    type: "text",
    iconSrc: NameInputIcon,
    placeholder: "الاسم الكامل",
  },
  {
    name: "email",
    type: "email",
    iconSrc: EmailInputIcon,
    placeholder: "البريد الإلكتروني",
  },
  {
    name: "phonenumber",
    type: "telephone",
    iconSrc: PhoneInputIcon,
    placeholder: "رقم التليفون",
  },
  {
    name: "message",
    type: "text",
    iconSrc: MessageInputIcon,
    placeholder: "أكتب شيئا هنا...",
    element: "textarea",
  },
];

// ContactUs component remains the same
const ContactUs: React.FC = () => {
  return (
    <div className="container mb-[135px]">
      <h3 className="mb-[70px] text-white font-bold text-3xl leading-[1.01523]">
        تواصل مع
        <SpecialText
          text=" فريقنا. "
          textSize="text-3xl"
          fontWeight="font-bold"
          styleOption={2}
        />
      </h3>
      <div className="flex justify-between">
        {/* form */}
        <ContactForm inputs={inputs} />
        {/* imgSection */}
        <ContactImage />
      </div>
    </div>
  );
};

export default ContactUs;
