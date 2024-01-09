import Image from "next/image";

interface ContactInfoProps {
  info: string;
  icon: string;
}

const contactInformation: ContactInfoProps[] = [
  {
    info: "السعودية _الدمام _1 شارع الدمام",
    icon: "imgSrc",
  },
  {
    info: "+9669879879868",
    icon: "imgSrc",
  },
  {
    info: "Deep Stark.com",
    icon: "imgSrc",
  },
];

export default function Map() {
  return (
    <div className="mb-[50px]">
      {/* Contact Information */}
      <ContactInformation />
      {/* map */}
      <MapComponent />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="flex justify-center items-center gap-5 mb-8">
      {contactInformation.map((item) => (
        <ContactInfo key={item.info} {...item} />
      ))}
    </div>
  );
}

function ContactInfo({ info, icon }: ContactInfoProps) {
  return (
    <div className="flex py-3 px-5 gap-3 items-center rounded-md border border-solid border-blue-500">
      <p className="text-gray-300 text-base font-medium leading-[1.5]">
        {info}
      </p>
      <span>I</span>
      {/* <img src={icon} /> */}
    </div>
  );
}

function MapComponent() {
  return (
    <div className="text-center h-[236px] rounded-8">
      <Image
        src="/images/contactus/map.png"
        alt="map image"
        className="inline"
        width={700}
        height={236}
      />
    </div>
  );
}
