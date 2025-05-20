import GameCarousel from '../components/Carousel/GameCarousel';
import { HeroSection } from "../components/Hero/HeroSection";
import DestaqueCarousel from '../components/Carousel/DestaqueCarousel';
import  CtaSection  from '../components/Section/CtaSection';
import ManifestoSection from '../components/Section/ManifestoSection';
import NewsLetterSection from '../components/Section/NewsLetterSection';
export function Home() {
    return (
    <>
        <HeroSection />
            <GameCarousel />
            <DestaqueCarousel />
            <CtaSection />
            <ManifestoSection />
            <NewsLetterSection />
    </>
    );
}