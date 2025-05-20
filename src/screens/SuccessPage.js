import { Box } from '@mui/material';
import styled from 'styled-components';
import ManifestoMap from '../assets/images/manifestmap.png';
import { HeadingOne } from '../components/HeadingOne/HeadingOne';

const SectionWrapper = styled(Box)`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 100px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MapBackground = styled("img")`
    position: absolute;
    top: 0;
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

const ContentWrapper = styled(Box)`
    width: 50%;
    margin: auto 0 ;
    background-color: rgba(41, 41, 41, 0.68);
    border-radius: 5px;
    border: 1px solid #8f8f8f;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    color: white;
    text-align: center;

`;


export function SuccessPage() {
    return (
        <SectionWrapper>
            <MapBackground src={ManifestoMap} alt="Map Background" />
            <ContentWrapper>
                <HeadingOne>Login foi efetuado com Sucesso!</HeadingOne>
            </ContentWrapper>
        </SectionWrapper>
    );
};