import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Comunidad } from "@/components/Comunidad";
import { Testimonials } from "@/components/Testimonials";
import GMapsWrapper from "@/components/GMapsWrapper";
import { FAQ } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Tableau } from "@/components/Tableau";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <MusicPlayer />
      <Hero />
      <Tableau />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Comunidad />
      <Testimonials />
      <FAQ />
      <GMapsWrapper height={450} />
      <Footer />
    </main>
  );
}
