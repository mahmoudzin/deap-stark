import { SpecialText, ContactUsBtn } from "@/app/ui/components";

export default function Banner() {
  return (
    <div className="text-center mb-[73px]">
      <div className="mb-[75px]">
        <span className="text-white text-[4rem] font-semibold ">
          <SpecialText text={"ديب ستارك! "} textSize="text-[4rem]" />
          حلول.
          <br />
          دليلك في العصر الرقمي.
        </span>
      </div>
      <ContactUsBtn />
    </div>
  );
}
