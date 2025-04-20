import { useRef } from 'react';
import styled from 'styled-components';
import { GameCard } from '../Card/GameCard';
import { Colors, FontFamilies, FontWeights, FontLineHeights,FontLetterSpacings, FontSizes, Shadows, Spaces } from '../../shared/DesignTokens';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import jogo1 from '../../assets/images/jogo1.jpg';
import jogo2 from '../../assets/images/jogo2.jpeg';

const CarouselContainer = styled.section`
    position: relative;
    overflow-x: auto;
    display: flex;
    // margin: 0px 100px 30px 100px;
    gap: ${Spaces.TWO};
    padding: ${Spaces.FOUR};
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ButtonNav = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    border-radius: 50%;
    padding: 8px;
    box-shadow: ${Shadows.ONE};
    cursor: pointer;
    z-index: 2;

    &:hover {
        background: ${Colors.BRANCO};
    }

    &.left {
        left: 10px;
    }

    &.right {
        right: 10px;
    }
`;

const games = [
    { title: 'Aventura na Selva', image: jogo1, price: '29,90', rating: 4 },
    { title: 'Mistério Urbano', image: jogo2, price: '39,90', rating: 5 },
    { title: 'Aventura na Selva', image: jogo1, price: '29,90', rating: 4 },
    { title: 'Mistério Urbano', image: jogo2, price: '39,90', rating: 5 },
    { title: 'Aventura na Selva', image: jogo1, price: '29,90', rating: 4 },
    { title: 'Mistério Urbano', image: jogo2, price: '39,90', rating: 5 },
    { title: 'Aventura na Selva', image: jogo1, price: '29,90', rating: 4 },
    { title: 'Mistério Urbano', image: jogo2, price: '39,90', rating: 5 },
    { title: 'Aventura na Selva', image: jogo1, price: '29,90', rating: 4 },
    { title: 'Mistério Urbano', image: jogo2, price: '39,90', rating: 5 },
];

const TitleSection = styled.h2`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.BOLD};
    line-height: ${FontLineHeights.MEDIUM};
    font-size: ${FontSizes.THREE};
    color: ${(props) => props.color};
    margin: 30px 0 0 0;
`;

const DescriptionSection = styled.h3`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.REGULAR};
    line-height: ${FontLineHeights.SMALL};
    font-size: ${FontSizes.TWO};
    color: ${(props) => props.color};
    margin-botton: 10px;
    margin-top: 0;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
`;

const SectionWrapper = styled.div`
    margin: 0 100px 30px 100px;
`;

export function GameCarousel() {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 250;
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <SectionWrapper>
                <TitleSection>Em Destaque</TitleSection>
                <DescriptionSection>Os jogos mais populares do momento!</DescriptionSection>
                <ButtonNav className="left" onClick={() => scroll('left')}>
                    <ChevronLeft />
                </ButtonNav>
                <CarouselContainer ref={carouselRef}>
                    {games.map((game, index) => (
                        <GameCard key={index} {...game} />
                    ))}
                </CarouselContainer>
                <ButtonNav className="right" onClick={() => scroll('right')}>
                    <ChevronRight />
                </ButtonNav>
            </SectionWrapper>
        </div>
    );
}
