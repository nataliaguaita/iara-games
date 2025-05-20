import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens'; // ajuste conforme seu caminho

import IaraLogo from '../../assets/images/iara-gradient-logo.png'; // substitua pelo caminho correto
import { FaInstagram, FaDiscord, FaGithub, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const FooterWrapper = styled(Box)`
    background-color: #252525;
    color: white;
    padding: 60px 40px 0 40px;
    `;

const FooterBottom = styled(Box)`
    background-color:${Colors.VERDE_ESCURO};
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 13px;
    `;

const Logo = styled('img')`
    width: 150px;
    margin-bottom: 10px;
    `;

const SocialIcons = styled(Box)`
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 20px;

    svg {
        color: white;
        font-size: 22px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
        color: ${Colors.AMARELO}; // ou qualquer cor hover
        }
    }
    `;

export function Footer() {
    return (
        <>
            <FooterWrapper>
                <Grid p="10px" paddingBottom="50px" container spacing={20} justifyContent="center">
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Navegue
                        </Typography>
                        <Typography variant="h5" mb="10px">Início</Typography>
                        <Typography variant="h5" mb="10px">Catálogo completo</Typography>
                        <Typography variant="h5" mb="10px">Publique seu Jogo</Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Ajuda
                        </Typography>
                        <Typography variant="h5" mb="10px">Central de Suporte</Typography>
                        <Typography variant="h5" mb="10px">Políticas de Reembolso</Typography>
                        <Typography variant="h5" mb="10px">Termos de Uso</Typography>
                        <Typography variant="h5" mb="10px">Políticas de Privacidade</Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Para Devs
                        </Typography>
                        <Typography variant="h5" mb="10px">Cadastre seu Estúdio</Typography>
                        <Typography variant="h5" mb="10px"> Envie seu Jogo</Typography>
                        <Typography variant="h5" mb="10px">Comunidade de Devs</Typography>
                    </Grid>

                    <Grid item xs={12} sm={3} textAlign="center">
                        <Logo src={IaraLogo} alt="Logo Iara Games" />
                        <Typography sx={{ color: Colors.VERDE_CLARO }}>
                            Jogos brasileiros em um só lugar.
                        </Typography>
                        <SocialIcons>
                            <FaInstagram />
                            <FaDiscord />
                            <FaGithub />
                            <FaYoutube />
                            <FaXTwitter />
                        </SocialIcons>
                    </Grid>
                </Grid>
            </FooterWrapper>

            <FooterBottom>
                © 2025 Iara Games. Todos os direitos reservados.
            </FooterBottom>
        </>
    );
}
