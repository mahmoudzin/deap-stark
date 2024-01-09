"use client";
import { SectionBtnWithRoute } from "@/app/ui/components";
import { useState } from "react";

interface ContactInputProps {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  label: string;
  options?: string[];
  width?: string;
}
const inputsData: ContactInputProps[] = [
  {
    id: 1,
    type: "telephone",
    name: "phonenumber",
    placeholder: "إكتب هنا",
    label: "رقم الهاتف",
    width: "1/2",
  },
  {
    id: 2,
    type: "text",
    name: "fullname",
    placeholder: "إكتب هنا",
    label: "الأسم بالكامل",
    width: "1/2",
  },
  {
    id: 3,
    type: "email",
    name: "email",
    placeholder: "إكتب هنا",
    label: "البريد الإلكتروني",
  },
  {
    id: 4,
    type: "checkbox",
    name: "service",
    label: "الخدمة المهتم بها ",
    options: ["التصميم", "التصميم", "التصميم", "التصميم"],
  },
  {
    id: 5,
    type: "text",
    name: "message",
    placeholder: "إكتب هنا",
    label: "رسالتك",
  },
];

export default function FromComponent() {
  return (
    <div className="w-full border border-solid border-gray-700 mb-[37px] border-x-0">
      <div className="flex flex-wrap w-[848px] mx-auto justify-between px-[60px] py-[60px] pb-[42px] items-center gap-8 rounded-b-12 border border-solid border-gray-700 border-t-0 mb-8">
        {inputsData.map((item) => (
          <ContactInput {...item} />
        ))}
        <div className="flex  w-full justify-center">
          <SectionBtnWithRoute text="إرسال" path="/" />
        </div>
      </div>
    </div>
  );
}
function ContactInput({
  type,
  name,
  placeholder,
  label,
  options,
  width,
}: ContactInputProps) {
  return (
    <div
      className={`flex px-[30px] py-[20px] flex-col gap-4 self-stretch rounded-6 border border-solid border-green-500 bg-opacity-50  ${
        width ? "w-[335px]" : "w-full"
      }`}>
      <label className="text-white  font-semibold text-base leading-[1.5]">
        {label}
      </label>

      {options ? (
        <div className="flex flex-wrap w-full ">
          {options.map((option) => (
            <CheckBox {...{ type, name, placeholder, option }} />
          ))}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="text-gray-500  font-semibold text-base leading-[1.5] w-full border-b border-[#333] bg-transparent outline-none pb-[6px]"
        />
      )}
    </div>
  );
}

function CheckBox({
  type,
  name,
  placeholder,
  option,
}: {
  type: string;
  name: string;
  placeholder: string;
  option: string;
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className="w-1/2 flex justify-start gap-3 items-center mb-7"
      key={option}>
      <input
        type={type}
        name={name}
        value={option}
        placeholder={placeholder}
        id={option}
        className="appearance-none"
      />
      <label
        htmlFor="myCheckbox"
        className="relative cursor-pointer flex gap-3 items-center">
        {isChecked && (
          <svg
            onClick={() => setIsChecked(false)}
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="27"
              rx="3.5"
              fill="#262626"
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="27"
              rx="3.5"
              stroke="#333333"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5975 9.08403C19.8411 9.2372 19.907 9.54764 19.7445 9.7774L13.3809 18.7773C13.2928 18.902 13.1501 18.9828 12.992 18.9976C12.8339 19.0123 12.6771 18.9595 12.5647 18.8536L8.32231 14.8536C8.11522 14.6583 8.11522 14.3417 8.32231 14.1465C8.52941 13.9512 8.86518 13.9512 9.07227 14.1465L12.8573 17.7152L18.8621 9.2227C19.0245 8.99294 19.3538 8.93085 19.5975 9.08403Z"
              fill="#9EFF00"
            />
          </svg>
        )}

        {!isChecked && (
          <span
            onClick={() => setIsChecked(true)}
            className="w-[28px] h-[28px] rounded bg-[#262626] checked:border-transparent flex items-center justify-center"
          />
        )}
        <span className="text-white font-Montserrat-Arabic text-base font-semibold leading-[1.5]">
          {option}
        </span>
      </label>
    </div>
  );
}
