import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { Gradient } from '../../shared/DesignTokens'; // ajuste se necessário

const SectionWrapper = styled(Box)`
    padding: 100px;
    display: flex;
    justify-content: center;
`;

const ContentBox = styled(Box)`
    max-width: 900px;
    width: 100%;
    text-align: center;
    color: white;
`;

const EmailInput = styled(TextField)`
    && {
        background-color: white;
        border-radius: 8px;
        margin-bottom: 16px;
        width: 100%;
    }
`;

const SubmitButton = styled(Button)`
    && {
        background: ${Gradient.BR_2};
        color: white;
        text-transform: none;
        font-weight: bold;
        border-radius: 8px;
        padding: 12px 24px;
        width: 100%;
        transition: 0.3s;

        &:hover {
            opacity: 0.9;
        }
    }
`;

const NewsLetterSection = () => {
    return (
        <SectionWrapper>
            <ContentBox>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Assine nossa Newsletter
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: '#ccc', fontSize: 18 }}>
                    Fique por dentro dos lançamentos, promoções e jogos incríveis feitos no Brasil. <br />
                    Receba novidades direto no seu e-mail e apoie o crescimento da cena gamer nacional!
                </Typography>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <EmailInput
                        placeholder="Digite seu e-mail"
                        variant="filled"
                        type="email"
                        required
                    />
                    <SubmitButton type="submit">
                        Quero Receber
                    </SubmitButton>
                </Box>
            </ContentBox>
        </SectionWrapper>
    );
};

export default NewsLetterSection;
