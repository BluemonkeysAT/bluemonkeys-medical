import { HeaderV2 } from "@/components/layout/HeaderV2";
import { FooterV2 } from "@/components/layout/FooterV2";
import { HeroV2 } from "@/components/sections/v2/HeroV2";
import { LossV2 } from "@/components/sections/v2/LossV2";
import { ServicesV2 } from "@/components/sections/v2/ServicesV2";
import { ProcessV2 } from "@/components/sections/v2/ProcessV2";
import { ReviewsV2 } from "@/components/sections/v2/ReviewsV2";
import { WhyUsV2 } from "@/components/sections/v2/WhyUsV2";
import { FAQV2 } from "@/components/sections/v2/FAQV2";
import { ContactV2 } from "@/components/sections/v2/ContactV2";
import { ChatWidget } from "@/components/ui/ChatWidget";

export const metadata = {
  title: "Blue Monkeys Medical — Mehr Patienten für Ihre Praxis",
  description:
    "Premium Digital-Marketing für Ärzte und Zahnärzte. Mehr Patientenanfragen, bessere Patienten, messbare Ergebnisse. Kostenlose Analyse starten.",
};

export default function Home() {
  return (
    <>
      <HeaderV2 />
      <main>
        <HeroV2 />
        <LossV2 />
        <ServicesV2 />
        <ProcessV2 />
        <ReviewsV2 />
        <WhyUsV2 />
        <FAQV2 />
        <ContactV2 />
        <ChatWidget />
      </main>
      <FooterV2 />
    </>
  );
}
