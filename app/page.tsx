import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PhotoSlider } from "@/components/photo-slider";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { MusicPlayer } from "@/components/music-player";
import GMapsWrapper from "@/components/gmaps-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <MusicPlayer />
      <Hero />
      <PhotoSlider />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
  <GMapsWrapper height={450} />
      <Footer />
    </main>
  );
}
