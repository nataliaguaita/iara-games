import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ManifestoMap from '../assets/images/manifestmap.png';
import { PlayerLogin } from '../components/Auth/PlayerLogin';
import { PlayerRegister } from '../components/Auth/PlayerRegister';
import { Colors, Gradient } from '../shared/DesignTokens';

const SectionWrapper = styled(Box)`
    width: 100%;
    height: 100%;
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
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const CustomTabs = styled(Tabs)`
    background-color: rgba(27, 27, 27, 0.7); 
    backdrop-filter: blur(10px);
    border: 1px solid #8f8f8f;
    border-radius: 5px;
    min-width: 550px;
`;

const CustomTab = styled((props) => <Tab disableRipple {...props} />)`
    && {
        font-size: 16px !important;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }

    &:hover {
        background: ${Gradient.BR};
    }

    &.Mui-selected {
        color: ${Colors.BRANCO};
        background: ${Colors.CINZA_MEDIO};
    }
    `;

export function PlayerAuthPage() {
    const location = useLocation();
    const [tab, setTab] = useState(0); // 0 = login, 1 = cadastro

    useEffect(() => {
        if (location.pathname.includes('/register')) {
            setTab(1);
        } else {
            setTab(0);
        }
    }, [location.pathname]);

    return (
        <SectionWrapper>
            <MapBackground src={ManifestoMap} alt="Mapa do Brasil" />
            <ContentWrapper>
                <CustomTabs variant="fullWidth" value={tab} onChange={(_, val) => setTab(val)} centered textColor="undefined" TabIndicatorProps={{ style: { display: 'none' } }}>
                    <CustomTab label="ENTRAR" sx={{ color: Colors.BRANCO }} />
                    <CustomTab label="CADASTRAR" sx={{ color: Colors.BRANCO }} />
                </CustomTabs>
                {tab === 0 ? <PlayerLogin /> : <PlayerRegister />}
            </ContentWrapper>
        </SectionWrapper>
    );
}
