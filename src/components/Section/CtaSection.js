import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Colors, FontWeights, BorderRadiuses, Gradient, Spaces, FontSizes, Shadows } from "../../shared/DesignTokens";
// import { Button } from "../Button/Button";

const SectionWrapper = styled(Box)`
    background: linear-gradient(90deg, #1f3c88, #28a745, #d4d700);
    padding: 80px 20px;
    text-align: center;
    color: ${Colors.BRANCO};
    `;

const StepsBox = styled(Box)`
    background: rgba(0, 0, 0, 0.3);
    border-radius: ${BorderRadiuses.THREE};
    padding: 32px;
    margin: 40px auto;
    max-width: 900px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    `;

const StepItem = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    `;


const StepCircle = styled(Box)`
    background-color: white;
    color: ${Colors.CINZA_ESCURO};
    font-weight: ${FontWeights.BOLD};
    font-size: 20px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    `;

const StepArrow = styled(Box)`
    font-size: 24px;
    margin: 0 16px;
    color: white;
    `;

    const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${Colors.AMARELO_ESCURO};
    color: ${Colors.CINZA_ESCURO};
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
        background: ${Colors.CINZA_MEDIO};
    }
`;

const ButtonSecondary = styled.button`
    width: 50%;
    height: 40px;
    background: ${Colors.BRANCO};
    color: ${Colors.CINZA_ESCURO};
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
        background-color: ${Colors.CINZA_MEDIO};
    }
`;

const ButtonGroup = styled(Box)`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; 
`;


const CtaSection = () => {
    return (
        <SectionWrapper>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
                Ei Dev, tem um jogo? Publique aqui no Iara Games!
            </Typography>
            <Typography variant="body1" sx={{fontSize: 17, maxWidth: 900, mx: "auto", fontWeight:500 }}>
                A Iara Games é a vitrine ideal para destacar jogos feitos no Brasil. Alcance novos jogadores, valorize sua criação e comece a vender hoje mesmo. 
            </Typography>
            <Typography variant="body1" sx={{fontSize: 20, maxWidth: 700, mx:"auto", mt: 3, fontWeight: FontWeights.BOLD}}>
            Cadastre-se, envie seu jogo e conquiste seu espaço no mercado! 
            </Typography>

            <StepsBox display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" borderRadius={2}>
                
                
                
                <StepItem>
                    <StepCircle>1</StepCircle>
                    <Typography fontWeight="bold" variant="body1" sx={{fontSize:14}}>CADASTRE-SE</Typography>
                </StepItem>

                <StepArrow>→</StepArrow>

                <StepItem>
                    <StepCircle>2</StepCircle>
                    <Typography fontWeight="bold" variant="body1" sx={{fontSize:14}}>ENVIE SEU JOGO</Typography>
                </StepItem>

                <StepArrow>→</StepArrow>

                <StepItem>
                    <StepCircle>3</StepCircle>
                    <Typography fontWeight="bold" variant="body1" sx={{fontSize:14}}>VENDA!</Typography>
                </StepItem>
            </StepsBox>

            <ButtonGroup>
                <Button>
                    Quero publicar meu Jogo
                </Button>
                <ButtonSecondary>
                    Saiba Mais
                </ButtonSecondary>
            </ButtonGroup>
        </SectionWrapper>
    );
};

export default CtaSection;
