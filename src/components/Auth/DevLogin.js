import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import Logo from '../../assets/images/iaragamesbranco.png'; // substitua pelo caminho correto
import { Colors } from '../../shared/DesignTokens';
import { ButtonPrimary } from '../Button/ButtonPrimary';
import { ButtonLink } from '../ButtonLink/ButtonLink';

const Container = styled(Box)`
    backdrop-filter: blur(10px);
    border: 1px solid #8f8f8f;
    padding: 50px;
    width: 550px;
    height: 500px;
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

    // borda ao focar o campo
    &.Mui-focused fieldset,
    .Mui-focused fieldset {
        border-color:rgb(173, 173, 173);  // Altere aqui para a cor desejada
        border-width: 2px;
    }
`;

const ButtonLinkStyled = styled(ButtonLink)`
    color: ${Colors.AMARELO_ESCURO};
    cursor: pointer; 
    
`;

const ButtonWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    gap: 16px;
    `;

export function DevLogin() {
    return (
        <Container>
            <LogoWrapper>
                <IaraLogo src={Logo} alt="Iara Games Logo" />
                <Typography variant="h5" color="white" ml={2} fontWeight="bold" letterSpacing={1}>
                    PARA DESENVOLVEDORS
                </Typography>
            </LogoWrapper>
            <TextFieldStyled fullWidth color="dark" label="Email" type="email" margin="normal"/>
            <TextFieldStyled  fullWidth color="dark" label="Senha" type="password" margin="normal"/>
            <ButtonWrapper>
                <ButtonPrimary>
                    Entrar
                </ButtonPrimary>
                <ButtonLinkStyled color={Colors.AMARELO} mt={2} fontSize="16px" fontWeight="bold">
                    ESQUECI MINHA SENHA
                </ButtonLinkStyled>
            </ButtonWrapper>
        </Container>
    );
}
