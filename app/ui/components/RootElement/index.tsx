"use client";
import "../../../../i18n";
import React, { useEffect } from "react";

let language = "";

if (typeof localStorage !== "undefined") {
  language = localStorage.getItem("i18nextLng") || "";
  if (!language) {
    localStorage.setItem("i18nextLng", "ar");
  }
} else {
  // If neither localStorage nor sessionStorage is supported
  console.log("Web Storage is not supported in this environment.");
}

if (localStorage) {
}

export default function RootElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={language} dir={language === "en" ? "ltr" : "rtl"}>
      {children}
    </html>
  );
}
