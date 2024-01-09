"use client";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const ContactUsBtn: FunctionComponent = ({
  classNameOptional = "",
}: {
  classNameOptional?: string;
}) => {
  const { t } = useTranslation();

  return (
    <Link href="/contactus" className={`inline-flex ${classNameOptional}`}>
      <div className="px-10 py-3 bg-gradient-to-b from-teal-500 to-teal-600 rounded-lg border border-white gap-2.5">
        <div className="text-white text-base font-semibold">
          {t("navbar.connect_btn")}
        </div>
      </div>
    </Link>
  );
};

export default ContactUsBtn;
