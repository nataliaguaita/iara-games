import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { MdAlternateEmail } from 'react-icons/md'; // <-- Ícone de @
import { Gradient, Colors, BorderRadiuses, Spaces, FontSizes, FontWeights, Shadows } from '../../shared/DesignTokens';

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

const InputWrapper = styled(Box)`
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    `;

const EmailIcon = styled(MdAlternateEmail)`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 20px;
    `;

const EmailInput = styled.input`
    width: 100%;
    height: 45px;
    padding: 0 16px 0 45px; /* padding-left maior por causa do ícone */
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #ccc;

    &::placeholder {
        font-size: 16px;
        color: #999;
    }
    `;

const SubmitButton = styled.button`
    width: 30%;
    height: 45px;
    align-self: center;
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

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                    <InputWrapper>
                        <EmailIcon />
                        <EmailInput
                            placeholder="escreva seu e-mail"
                            type="email"
                            required
                        />
                    </InputWrapper>
                    <SubmitButton type="submit">Quero Receber</SubmitButton>
                </Box>
            </ContentBox>
        </SectionWrapper>
    );
};

export default NewsLetterSection;
