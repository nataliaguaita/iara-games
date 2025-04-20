import { GameCarousel } from "../components/Carousel/GameCarousel";
import { HeadingTwo } from '../components/HeadingTwo/HeadingTwo'
import { HeroSection } from "../components/Hero/HeroSection";
export function Home() {
    return (
    <>
        <HeroSection />
            <GameCarousel />
    </>
    );
}