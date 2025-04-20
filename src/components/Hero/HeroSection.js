import { Colors, Spaces } from '../../shared/DesignTokens';
import styled from "styled-components";
import { HeadingOne } from '../HeadingOne/HeadingOne';
import { Description } from '../Description/Description';
import { Button } from '../Button/Button';
import backgroundImage from '../../assets/images/main-banner.png';

const HeroSectionStyled = styled.section`
    width: auto;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: ${Spaces.FOUR};
    color: ${Colors.CINZA_ESCURO};
`
const ContentWrapper = styled.div`
	display: flex;
    margin-left: 100px;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
	max-width: 400px;
	gap: ${Spaces.TWO};
`;
export function HeroSection() {
    return (
    <HeroSectionStyled>
        <ContentWrapper>
            <HeadingOne>Iara Games, o seu destino para jogos nacionais!</HeadingOne>
            <Description>Acreditamos na criatividade do nosso povo, e queremos que você tenha a oportunidade de explorar isso através
            de nossos jogos.</Description>
            <Button>Explorar Jogos</Button>
        </ContentWrapper>
    </HeroSectionStyled>
    );
}