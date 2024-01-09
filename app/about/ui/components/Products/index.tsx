import { SpecialIconToSection } from "@/app/ui/components";
import Icon from "./assets/sec_icon.svg";
import productIcon from "./assets/product_icon.svg";
import Image from "next/image";
export default function Products() {
  return (
    <div className="mb-[100px]">
      <SecHead />
      <ProductsRow />
    </div>
  );
}

function SecHead() {
  return (
    <div className="flex items-center mb-[50px] mt-[55px] gap-[55px]">
      <SpecialIconToSection icon={Icon} />
      <div className="text-white text-2xl font-semibold">
        نحن نقدم الحل الأمثل لنمو عملك
      </div>
    </div>
  );
}

interface IProductCard {
  title: string;
  desc: string;
  icon: any;
}
const products: IProductCard[] = [
  {
    title: "تنمية عملك",
    desc: "نحن نساعد في تحديد أفضل الطرق لتحسين عملك",
    icon: productIcon,
  },
  {
    title: "تنمية عملك",
    desc: "نحن نساعد في تحديد أفضل الطرق لتحسين عملك",
    icon: productIcon,
  },
  {
    title: "تنمية عملك",
    desc: "نحن نساعد في تحديد أفضل الطرق لتحسين عملك",
    icon: productIcon,
  },
];
function ProductsRow() {
  return (
    <div className="flex justify-between">
      {products.map((product: IProductCard) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
}

function ProductCard({ title, desc, icon }: IProductCard) {
  return (
    <div className="width-[393px] gap-[43px]">
      <div className="border border-white pl-[65px] pr-6 py-[50px] rounded-2xl gap-[15px]">
        <div className="p-[30px] bg-gradient-to-bl from-sky-500 via-teal-500 to-sky-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
          <Image
            width={34}
            height={34}
            className="w-[34px] h-[34px]"
            src={icon}
            alt={title}
          />
        </div>
        <div className="gap-[15px]">
          <div className="text-white text-2xl font-semibold mt-[45px] mb-[15px]">
            {title}
          </div>
          <div className=" text-white text-lg font-semibold">{desc}</div>
        </div>
      </div>
    </div>
  );
}
