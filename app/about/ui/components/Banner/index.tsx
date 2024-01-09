import { SpecialText, ContactUsBtn } from "@/app/ui/components";

export default function Banner() {
  return (
    <div className="text-center mb-[72px]">
      <div className="mb-[75px]">
        <span className="text-white text-[75px] font-semibold ">
          <SpecialText text={"ديب ستارك! "} />
          حلول.
          <br />
          دليلك في العصر الرقمي.
        </span>
      </div>

      <ContactUsBtn />
    </div>
  );
}
