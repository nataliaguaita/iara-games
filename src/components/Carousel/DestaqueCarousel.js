
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors, Spaces, FontSizes, FontWeights, Shadows, BorderRadiuses } from "../../shared/DesignTokens";
import { Box, Typography, IconButton, Stack, CardMedia } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { HeadingTwo } from "../HeadingTwo/HeadingTwo";
import jogo1 from '../../assets/images/j01.jpg';
import jogo2 from '../../assets/images/j02.jpg';
import jogo3 from '../../assets/images/j03.png';
import jogo4 from '../../assets/images/j04.avif';
import jogo5 from '../../assets/images/j05.png';
import { Gradient } from "../../shared/DesignTokens";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { LikeButton } from "../Button/LikedButton";

const games = [
    {
        title: "Chroma Squad",
        rating: 4,
        description:
            "Chroma Squad é um RPG tático sobre cinco dublês que decidem sair de seus trabalhos e criar o seu próprio estúdio de TV inspirado em Power Rangers! Contrate atores, compre equipamentos e melhorias para o seu estúdio, crie armas e robôs gigantes feitos de papelão e fita crepe.",
        price: "R$ 59,99",
        image: jogo5,
    },
    {
        title: "No Place for Bravery",
        rating: 3,
        description: "Thorn, um velho e ambicioso guerreiro, perambula por um mundo devastado pela guerra em busca de sua filha perdida. Sobreviva às batalhas desenfreadas e violentas neste RPG de ação 2D com visão de cima, e descubra a história arrepiante por trás da odisseia de Thorn.",
        price: "R$ 29,60",
        image: jogo3,
    },
    {
        title: "Aritana e a Pena da Harpia",
        rating: 5,
        description: "Aritana e a Pena da Harpia é um jogo de plataforma 2.5D com inovadora mecânica de posturas e sistema de combos. Corra contra o tempo, enfrente os desafios da Montanha da Harpia, enfrente os Espíritos da Floresta e entre nas terras do temível Mapinguari.",
        price: "R$ 39,99",
        image: jogo2,
    },
    {
        title: "Knights of Pen & Paper 2",
        rating: 4,
        description: "Prepare-se para habitar um mundo de cavalheirismo, luta de classes e referências pop excêntricas. Knights of Pen & Paper 2 é uma aventura em turnos, estilo retrô, pixel-art, repleta de perigos, intrigas, mortes e testes de resistência!",
        price: "R$ 75,45",
        image: jogo1,
    },
];

const Button = styled.button`
    width: 100%;
    height: 40px;
    background: ${Gradient.BR};
    color: ${Colors.BRANCO};
    border: none;
    border-radius: ${BorderRadiuses.TWO};
    padding: ${Spaces.ONE} ${Spaces.TWO};
    cursor: pointer;
    font-size: ${FontSizes.TWO};
    font-weight: ${FontWeights.BOLD};
    box-shadow: ${Shadows.ONE};
    margin-top: ${Spaces.TWO};
    margin-right: ${Spaces.TWO};
    transition: background-color 0.3s;

    &:hover {
        background: ${Colors.AZUL_ESCURO};
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DestaqueCarousel = () => {
    const [index, setIndex] = useState(0);
    const currentGame = games[index];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % games.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ p: 15, color: "#fff" }}>
            <Box sx={{ mb: "50px" }}>
                <HeadingTwo>JOGOS MAIS VENDIDOS</HeadingTwo>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    borderRadius: 1,
                    overflow: "hidden",
                }}
            >
                <CardMedia
                    component="img"
                    image={currentGame.image}
                    alt={currentGame.title}
                    sx={{
                        width: 700,
                        height: 400,
                        objectFit: "cover",
                        flexShrink: 0, // impede de encolher
                        borderRadius: 2,
                    }}
                />
                <Box sx={{ p: 3, display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            {currentGame.title}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                            {Array(currentGame.rating).fill().map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                        </Box>
                        <Typography variant="body1" sx={{ fontSize: 15 }} color="gray" mb={2}>
                            {currentGame.description}
                        </Typography>
                        <ButtonLink variant="text" sx={{ fontSize: 12, color: "#aaa", textTransform: "none", textDecoration: "underline", }}>
                            VER AVALIAÇÕES
                        </ButtonLink>
                    </Box>
                    <Box sx={{ mt: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h3" color={Colors.AMARELO_ESCURO} fontWeight="bold">
                            {currentGame.price}
                        </Typography>
                        <ButtonWrapper>
                            <Button
                                variant="contained"

                                sx={{
                                    background: Gradient.BR,
                                    textTransform: "none",
                                    borderRadius: 2,
                                }}
                            >
                                Adicionar ao Carrinho
                            </Button>
                            <LikeButton />
                        </ButtonWrapper>
                    </Box>
                </Box>
            </Box>

            {/* Thumbnails */}
            <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
                {games.map((game, i) => (
                    <CardMedia
                        key={i}
                        component="img"
                        image={game.image}
                        alt={game.title}
                        sx={{
                            width: 64,
                            height: 64,
                            objectFit: "cover",
                            borderRadius: 2,
                            border: i === index ? "2px solid #00c851" : "2px solid transparent",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default DestaqueCarousel;
