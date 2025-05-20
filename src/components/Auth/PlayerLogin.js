import React, { useState } from 'react';
import { Box, TextField, Typography, Alert } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/iaragamesbranco.png';
import { Colors } from '../../shared/DesignTokens';
import { ButtonPrimary } from '../Button/ButtonPrimary';


const Container = styled(Box)`
    backdrop-filter: blur(10px);
    border: 1px solid #8f8f8f;
    padding: 50px;
    width: 550px;
    height: auto;
    border-radius: 5px;
`;

const IaraLogo = styled.img`
    width: 40%;
    margin-bottom: 20px;
`;

const LogoWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const TextFieldStyled = styled(TextField)`
    background-color: ${Colors.BRANCO};
    border-radius: 4px;
    margin-bottom: 16px;

    input {
        font-size: 18px;
    }

    label {
        font-size: 16px;
    }

    &.Mui-focused fieldset,
    .Mui-focused fieldset {
        border-color: rgb(173, 173, 173);
        border-width: 2px;
    }
`;

const ButtonWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    gap: 16px;
`;

export function PlayerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const players = JSON.parse(localStorage.getItem('players') || '[]');
        const player = players.find((p) => p.email === email && p.password === password);

        if (player) {
            setErrorMessage('');
            navigate('/login/player/success');
        } else {
            setErrorMessage('Email ou senha incorretos.');
        }
    };

    return (
        <Container>
            <LogoWrapper>
                <IaraLogo src={Logo} alt="Iara Games Logo" />
                <Typography variant="h5" color="white" ml={2} fontWeight="bold" letterSpacing={1}>
                    PARA JOGADORES
                </Typography>
            </LogoWrapper>

            {errorMessage && (
                <Alert severity="error" sx={{ mb: 2, fontSize: '16px' }}>
                    {errorMessage}
                </Alert>
            )}

            <TextFieldStyled
                fullWidth
                color="dark"
                label="Email do usuário"
                type="email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextFieldStyled
                fullWidth
                color="dark"
                label="Senha"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <ButtonWrapper>
                <ButtonPrimary onClick={handleLogin}>Entrar</ButtonPrimary>
            </ButtonWrapper>
        </Container>
    );
}
