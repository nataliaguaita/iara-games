import GameCarousel from '../components/Carousel/GameCarousel';
import { HeroSection } from "../components/Hero/HeroSection";
import DestaqueCarousel from '../components/Carousel/DestaqueCarousel';
import  CtaSection  from '../components/Section/CtaSection';
export function Home() {
    return (
    <>
        <HeroSection />
            <GameCarousel />
            <DestaqueCarousel />
            <CtaSection />
    </>
    );
}