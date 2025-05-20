import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import Logo from '../../assets/images/iaragamesbranco.png';
import { Colors } from '../../shared/DesignTokens';
import { ButtonPrimary } from '../Button/ButtonPrimary';
import { ButtonLink } from '../ButtonLink/ButtonLink';

const Container = styled(Box)`
    backdrop-filter: blur(10px);
    border: 1px solid #8f8f8f;
    padding: 50px;
    width: 550px;
    height: 100%;
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

// Função para formatar o CNPJ
const formatCNPJ = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .slice(0, 18);
};

export function DevRegister() {
    const [cnpj, setCnpj] = useState('');

    return (
        <Container>
            <LogoWrapper>
                <IaraLogo src={Logo} alt="Iara Games Logo" />
                <Typography variant="h5" color="white" ml={2} fontWeight="bold" letterSpacing={1}>
                    PARA DESENVOLVEDORES
                </Typography>
            </LogoWrapper>

            <TextFieldStyled fullWidth label="Nome Desenvolvedor / Nome Estúdio" margin="normal" />
            <TextFieldStyled fullWidth label="Email para contato" type="email" margin="normal" />

            <TextFieldStyled
                fullWidth
                label="CNPJ"
                type="text"
                value={cnpj}
                onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
                margin="normal"
            />

            <TextFieldStyled fullWidth label="Senha" type="password" margin="normal" />
            <TextFieldStyled fullWidth label="Confirmar senha" type="password" margin="normal" />

            <ButtonWrapper>
                <ButtonPrimary>
                    Fazer Cadastro
                </ButtonPrimary>
                <ButtonLinkStyled mt={2} fontSize="16px" fontWeight="bold">
                    JÁ TENHO UMA CONTA
                </ButtonLinkStyled>
            </ButtonWrapper>
        </Container>
    );
}
