import { GameCarousel } from "../components/Carousel/GameCarousel";
import { HeadingTwo } from '../components/HeadingTwo/HeadingTwo'
import { HeroSection } from "../components/Hero/HeroSection";
import DestaqueCarousel from '../components/Carousel/DestaqueCarousel';

export function Home() {
    return (
    <>
        <HeroSection />
            <GameCarousel />
            <DestaqueCarousel />
    </>
    );
}