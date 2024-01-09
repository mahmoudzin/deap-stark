"use client";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "./assets/brand_logo.svg";
import ContactUsButton from "../ContactUsBtn";

interface MenuItem {
  path: string;
  labelKey: string;
}

const menu: MenuItem[] = [
  { path: "/", labelKey: "home" },
  { path: "/portfolio", labelKey: "portfolio" },
  { path: "/services", labelKey: "services" },
  { path: "/about", labelKey: "about" },
  { path: "/blog", labelKey: "blog" },
];

const NavBar: FunctionComponent = () => {
  return (
    <nav className="container mx-auto  h-[54px] relative z-[100]">
      <div className="w-full pt-8 flex items-center justify-between">
        <Logo />
        <Menu />
        <ContactUsButton classNameOptional="w-1/4 justify-end" />
      </div>
    </nav>
  );
};

const Logo: FunctionComponent = () => {
  return (
    <div className="inline-flex items-start w-1/4">
      <div className="flex items-center gap-4">
        <Image src={brandLogo} alt="Brand Logo" width={37} height={54} />
        <div className="text-white text-2xl font-semibold font-['Inter'] leading-7">
          DeepStark
        </div>
      </div>
    </div>
  );
};

const Menu: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="gap-[45px] inline-flex w-1/2 items-center justify-center">
      {menu.map(({ path, labelKey }) => (
        <Link
          href={path}
          key={path}
          className="text-neutral-200 text-lg font-semibold">
          {t(`navbar.${labelKey}`)}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
