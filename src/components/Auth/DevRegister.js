import React, { useState } from 'react';
import { Box, TextField, Typography, Alert } from '@mui/material';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

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
    margin-bottom: 16px;
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

const formatCNPJ = (value: string): string => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .slice(0, 18);
};

const validationSchema = Yup.object({
    name: Yup.string().required('Nome do desenvolvedor é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    cnpj: Yup.string()
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido')
        .required('CNPJ obrigatório'),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Senhas não coincidem')
        .required('Confirme sua senha'),
});

export function DevRegister() {
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                cnpj: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                const { name, email, cnpj, password } = values;

                const existingDevs = JSON.parse(localStorage.getItem('devs') || '[]');
                const updatedDevs = [...existingDevs, { name, email, cnpj, password }];
                localStorage.setItem('devs', JSON.stringify(updatedDevs));

                setSuccessMessage('Cadastro realizado com sucesso!\nVocê será redirecionado para a página de login em 5 segundos.');
                actions.resetForm();
                actions.setSubmitting(false);

                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/login/dev'); 
                }, 5000);
            }}
        >
            {({ errors, touched, handleChange, handleBlur, values, setFieldValue }) => (
                <Form>
                    <Container>
                        <LogoWrapper>
                            <IaraLogo src={Logo} alt="Iara Games Logo" />
                            <Typography variant="h5" color="white" ml={2} fontWeight="bold" letterSpacing={1}>
                                PARA DESENVOLVEDORES
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
                            label="Nome Desenvolvedor / Nome Estúdio"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        <TextFieldStyled
                            fullWidth
                            color="dark" 
                            label="Email para contato"
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
                            label="CNPJ"
                            name="cnpj"
                            value={values.cnpj}
                            onChange={(e) => setFieldValue('cnpj', formatCNPJ(e.target.value))}
                            onBlur={handleBlur}
                            error={touched.cnpj && Boolean(errors.cnpj)}
                            helperText={touched.cnpj && errors.cnpj}
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
