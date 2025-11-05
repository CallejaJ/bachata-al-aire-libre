import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PhotoSlider } from "@/components/photo-slider";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";
import { MusicPlayer } from "@/components/music-player";
import { LanguageProvider } from "@/components/language-provider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen overflow-x-hidden w-full">
        <Header />
        <MusicPlayer />
        <Hero />
        <PhotoSlider />
        <Pricing />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
