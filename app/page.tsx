import {
  About,
  Banner,
  Features,
  Products,
  Serivces,
  TrustedCompany,
  Testimonials,
} from "./homeui/components";
import { Spreated, ContactUs } from "./ui/components";
export default async function Page() {
  return (
    <main className="mt-[85px] bg-transparent relative z-50">
      <Banner />
      <Features />
      <TrustedCompany />
      <About />
      <Products />
      <Serivces />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
