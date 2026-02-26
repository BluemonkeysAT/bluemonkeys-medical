import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Problems,
  Services,
  CaseStudies,
  Testimonials,
  Process,
  FAQ,
  Contact,
  CTABanner
} from "@/components/sections";

export default function HomeV1() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
