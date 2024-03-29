import type { Metadata } from "next";
import { dir } from "i18next";
// import { languages } from "@/app/i18n/settings";
// import { Inter } from "next/font/google";
import "@/app/ui/globals.scss";
import { Montserrat } from "next/font/google";
import { Footer, NavBar, RootElement } from "@/app/ui/components";
import "@/node_modules/slick-carousel/slick/slick.css";
import "@/node_modules/slick-carousel/slick/slick-theme.css";

// const inter = Inter({ subsets: ["latin"] });
const arfont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootElement>
      <body className={`arabic_font`}>
        {/* <div
          className="absolute"
          style={{
            width: 693,
            height: 693,
            background: "#00E509",
            boxShadow: "500px 500px 500px ",
            borderRadius: 9999,
            filter: "blur(500px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 693,
            height: 693,
            background: "#6500E5",
            boxShadow: "500px 500px 500px ",
            borderRadius: 9999,
            filter: "blur(500px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 693,
            height: 693,
            transform: "rotate(112.81deg)",
            transformOrigin: "0 0",
            background: "#0BA89F",
            boxShadow: "800px 800px 800px ",
            borderRadius: 9999,
            filter: "blur(800px)",
          }}
        /> */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </RootElement>
  );
}
