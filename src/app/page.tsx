import {
  Hero,
  Services,
  CaseStudies,
  Testimonials,
  Process,
  WhyUs,
  Contact,
  CTABanner,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <WhyUs />
      <CTABanner />
      <Contact />
    </>
  );
}
