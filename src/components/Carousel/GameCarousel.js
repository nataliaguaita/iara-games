import React, { useRef, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { GameCard } from '../Card/GameCard';
import jogo1 from '../../assets/images/j01.jpg';
import jogo2 from '../../assets/images/j02.jpg';
import jogo3 from '../../assets/images/j03.png';
import jogo4 from '../../assets/images/j04.avif';
import jogo5 from '../../assets/images/j05.png';
import { HeadingTwo } from '../HeadingTwo/HeadingTwo';


const originalGames = [
    { title: 'Knights of Pen & Paper 2', image: jogo1, price: '75,45', rating: 4 },
    { title: 'Aritana e a Pena da Harpia', image: jogo2, price: '36,70', rating: 5 },
    { title: 'No Place for Bravery', image: jogo3, price: '29,60', rating: 3 },
    { title: 'Dandara Trials of Fear Edition', image: jogo4, price: '36,67', rating: 5 },
    { title: 'Chroma Squad', image: jogo5, price: '59,99', rating: 4 },
];


// Cria a sequência [original, original, original] para looping
const games = [...originalGames, ...originalGames, ...originalGames];

export default function GameCarousel() {
    const carouselRef = useRef(null);
    const CARD_WIDTH = 700; // 4 unidades do MUI spacing (px={4})
    const middleIndex = originalGames.length;

    useEffect(() => {
        // Posiciona o scroll no início da "segunda" sequência para looping
        const scrollToMiddle = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft = (CARD_WIDTH + 16) * middleIndex;
            }
        };
        scrollToMiddle();
    }, [middleIndex]);

    const handleScroll = () => {
        const node = carouselRef.current;
        const maxScroll = (CARD_WIDTH + 16) * (games.length - middleIndex);
        if (node.scrollLeft <= 0) {
            node.scrollLeft = maxScroll - CARD_WIDTH;
        } else if (node.scrollLeft >= maxScroll) {
            node.scrollLeft = CARD_WIDTH;
        }
    };

    const scroll = (direction) => {
        const node = carouselRef.current;
        if (node) {
            node.scrollBy({
                left: direction === 'left' ? -CARD_WIDTH : CARD_WIDTH,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box  sx={{ px: 10, color: "#fff" }}> 
            <Box my="100px" position="relative" width="100%" overflow="hidden" px={10} >
            <HeadingTwo>JOGOS EM DESTAQUE</HeadingTwo>
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 1, bgcolor: 'white', boxShadow: 2 }}
                >
                    <ChevronLeftIcon />
                </IconButton>

                <Box
                    ref={carouselRef}
                    onScroll={handleScroll}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        mt: 4,
                        scrollSnapType: 'x mandatory',
                        gap: 2,
                        px: `calc(50% - ${CARD_WIDTH / 2}px)`,
                        scrollBehavior: 'smooth',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {games.map((game, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: `${CARD_WIDTH}px`,
                                height: '518px',
                                flexShrink: 0,
                                scrollSnapAlign: 'center',
                            }}
                        >
                            <GameCard {...game} />
                        </Box>
                    ))}
                </Box>

                <IconButton
                    onClick={() => scroll('right')}
                    sx={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 1, bgcolor: 'white', boxShadow: 2 }}
                >
                    <ChevronRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}