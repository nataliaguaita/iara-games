
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton, Stack, CardMedia } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const games = [
    {
        title: "Chroma Squad",
        rating: 4,
        description:
            "Chroma Squad é um RPG tático sobre cinco dublês que decidem sair de seus trabalhos e criar o seu próprio estúdio de TV inspirado em Power Rangers!",
        price: "R$ 59,99",
        image: "/images/chroma-squad.png",
    },
    {
        title: "No Place for Bravery",
        rating: 5,
        description: "Um jogo de ação e narrativa intensa com visual pixel art impressionante.",
        price: "R$ 49,99",
        image: "/images/no-place.png",
    },
    {
        title: "Arida",
        rating: 3,
        description: "Sobrevivência e aventura no sertão brasileiro.",
        price: "R$ 39,99",
        image: "/images/arida.png",
    },
    {
        title: "Knights of Pen & Paper II",
        rating: 4,
        description: "Um RPG retrô com muito humor e nostalgia de mesa.",
        price: "R$ 19,99",
        image: "/images/knights.png",
    },
];

const DestaqueCarousel = () => {
    const [index, setIndex] = useState(0);
    const currentGame = games[index];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % games.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ backgroundColor: "#121212", p: 4, color: "#fff" }}>
            <Typography variant="subtitle2" color="gray" mb={2}>
                JOGOS MAIS VENDIDOS
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    backgroundColor: "#1e1e1e",
                    borderRadius: 2,
                    overflow: "hidden",
                }}
            >
                <CardMedia
                    component="img"
                    image={currentGame.image}
                    alt={currentGame.title}
                    sx={{ width: { xs: "100%", md: "50%" }, objectFit: "cover" }}
                />
                <Box sx={{ p: 3, display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                    <Box>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {currentGame.title}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                            {Array(currentGame.rating).fill().map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                        </Box>
                        <Typography variant="body2" color="gray" mb={2}>
                            {currentGame.description}
                        </Typography>
                        <Button variant="text" sx={{ fontSize: 12, color: "#aaa", textTransform: "none" }}>
                            VER AVALIAÇÕES
                        </Button>
                    </Box>
                    <Box sx={{ mt: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h6" color="gold">
                            {currentGame.price}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                startIcon={<ShoppingCartIcon />}
                                sx={{
                                    background: "linear-gradient(to right, #0052D4, #00c851)",
                                    textTransform: "none",
                                    borderRadius: 2,
                                }}
                            >
                                Adicionar ao Carrinho
                            </Button>
                            <IconButton sx={{ color: "#fff" }}>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Stack>
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
