import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PhotoSlider } from "@/components/photo-slider";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";
import { MusicPlayer } from "@/components/music-player";
import { LanguageProvider } from "@/components/language-provider";
import GMaps from "@/components/gmaps";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen overflow-x-hidden w-full">
        <Header />
        <MusicPlayer />
        <Hero />
        <PhotoSlider />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <GMaps height={450} />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
