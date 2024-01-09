import {
  About,
  Banner,
  Features,
  Products,
  Serivces,
  Testimonials,
} from "./homeui/components";
import { TrustedCompany, ContactUs } from "./ui/components";
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
