import React, { useState } from 'react';
import { Box, TextField, Typography, Alert } from '@mui/material';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'; // 👈 Importante

import Logo from '../../assets/images/iaragamesbranco.png';
import { Colors } from '../../shared/DesignTokens';
import { ButtonPrimary } from '../Button/ButtonPrimary';

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
    && {
    background-color: ${Colors.BRANCO};
    border-radius: 4px;
    margin-bottom: 16px; !important;
}
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

const validationSchema = Yup.object({
    username: Yup.string().required('Nome de usuário obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Senhas não coincidem')
        .required('Confirme sua senha'),
});

export function PlayerRegister() {
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); 

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                const { username, email, password } = values;

                const existingUsers = JSON.parse(localStorage.getItem('players') || '[]');
                const updatedUsers = [...existingUsers, { username, email, password }];
                localStorage.setItem('players', JSON.stringify(updatedUsers));

                setSuccessMessage('Cadastro realizado com sucesso!\nVocê será redirecionado para a página de login em 5 segundos.');
                actions.resetForm();
                actions.setSubmitting(false);


                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/login/player');
                }, 5000);
            }}
        >
            {({ errors, touched, handleChange, handleBlur, values }) => (
                <Form>
                    <Container>
                        <LogoWrapper>
                            <IaraLogo src={Logo} alt="Iara Games Logo" />
                            <Typography variant="h5" color="white" ml={2} fontWeight="bold" letterSpacing={1}>
                                PARA JOGADORES
                            </Typography>
                        </LogoWrapper>

                        {successMessage && (
                            <Alert severity="success" sx={{ mb: 2, fontSize: '18px', fontWeight: 'bold' }}>
                                {successMessage}
                            </Alert>
                        )}

                        <TextFieldStyled
                            fullWidth
                            color="dark"
                            label="Nome do usuário"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.username && Boolean(errors.username)}
                            helperText={touched.username && errors.username}
                        />

                        <TextFieldStyled
                            fullWidth
                            color="dark"
                            label="Email do usuário"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />

                        <TextFieldStyled
                            fullWidth
                            color="dark"
                            label="Senha"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />

                        <TextFieldStyled
                            fullWidth
                            color="dark"
                            label="Confirmar senha"
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                        />

                        <ButtonWrapper>
                            <ButtonPrimary type="submit">Fazer Cadastro</ButtonPrimary>
                        </ButtonWrapper>
                    </Container>
                </Form>
            )}
        </Formik>
    );
}
