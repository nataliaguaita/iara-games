import { Box, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import { Colors, Gradient } from '../../shared/DesignTokens';
import ManifestoMap from '../../assets/images/manifestmap.png';
import { HeadingTwo } from '../HeadingTwo/HeadingTwo';

const SectionWrapper = styled(Box)`
    position: relative;
    overflow: hidden;
    padding: 100px 100px;
`;

const MapBackground = styled("img")`
    position: absolute;
    top: 100;
    right: 0;
    width: 1200px;
    opacity: 0.2;
    z-index: 1;
    transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.02);
        opacity: 0.5;
    }
`;

const TextContent = styled(Box)`
    position: relative;
    z-index: 2;

    h2, p {
        color: white;
    }
`;

const ManifestoSection = () => {
    return (
        <SectionWrapper>
            {/* MAPA EM BACKGROUND */}
            <MapBackground src={ManifestoMap} alt="Mapa do Brasil" />

            <TextContent>
                <Box sx={{ mb: "50px" }}>
                    <HeadingTwo>MANIFESTO IARA GAMES</HeadingTwo>
                </Box>

                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" fontWeight="bold" maxWidth={500} sx={{ mb: 10 }}>
                            ''Acreditamos que quando jogamos{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: Gradient.BR_2,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline',
                                }}
                            >
                                o que é nosso
                            </Box>
                            , todo mundo ganha.''
                        </Typography>

                        <Typography variant="h2" fontWeight="bold" maxWidth={500} sx={{ mb: 2 }}>
                            Nós acreditamos no poder criativo{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: Gradient.BR_2,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline',
                                }}
                            >
                                brasileiro.
                            </Box>
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#ccc', mb: 4, fontSize: 18, maxWidth: 500 }}>
                            A Iara Games nasceu para dar voz, espaço e reconhecimento aos jogos desenvolvidos no Brasil.
                            Nosso país tem talento, tem histórias únicas e uma cultura rica que merece ser celebrada também
                            no universo dos games.
                        </Typography>

                        <Typography variant="h2" fontWeight="bold" maxWidth={500} sx={{ mb: 2 }}>
                            + do que uma loja, <br />
                            <Box
                                component="span"
                                sx={{
                                    background: Gradient.BR_2,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline',
                                }}
                            >
                                somos um movimento.
                            </Box>
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#ccc', mb: 4, fontSize: 18, maxWidth: 500 }}>
                            Queremos criar uma comunidade que valoriza, apoia e joga o que é feito aqui.
                            Conectamos desenvolvedores e jogadores com um propósito em comum: fortalecer o cenário nacional de jogos.
                        </Typography>

                        <Typography variant="h3" fontWeight="bold" maxWidth={500} sx={{ mb: 2, color: '#ccc' }}>
                            <Box
                                component="span"
                                sx={{
                                    background: Gradient.BR_2,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline',
                                }}
                            >
                                Por que apoiar
                            </Box>
                            <br /> jogos brasileiros?
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#ccc', mb: 4, fontSize: 18, maxWidth: 500 }}>
                            Porque temos criatividade, talento e histórias únicas.
                            <br /><br />
                            A Iara Games existe para conectar você aos jogos feitos aqui, valorizando quem cria,
                            quem joga e quem acredita no potencial do Brasil nos games.
                        </Typography>
                    </Grid>
                </Grid>
            </TextContent>
        </SectionWrapper>
    );
};

export default ManifestoSection;
