import styled from 'styled-components';
import { FontSizes, Colors, Spaces, BorderRadiuses, Shadows, FontWeights, Gradient } from '../../shared/DesignTokens';
import { LikeButton } from '../Button/LikedButton.js';
import { ButtonLink } from '../ButtonLink/ButtonLink.js';


const Card = styled.div`
    width: 700px;
    // height: 518px;
    margin: ${Spaces.TWO};
    background-color: ${Colors.CINZA_ESCURO};
    border-radius: ${BorderRadiuses.TWO};
    box-shadow: ${Shadows.TWO};
    BORDER: 1px solid ${Colors.CINZA_MEDIO};
    overflow: hidden;
    text-align: left;
`;

const GameImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;

const GameInfo = styled.div`
    padding: ${Spaces.TWO};
`;

const GameTitle = styled.h3`
    font-size: ${FontSizes.THREE};
    margin-bottom: ${Spaces.ONE};
    margin-top: 0;
    color: ${Colors.BRANCO};
`;

const Price = styled.p`
    font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.TWO_HALF};
    color: ${Colors.AMARELO_ESCURO};
    margin-bottom: ${Spaces.ONE};
    margin-top: 20px;
`;

const Rating = styled.span`
    font-size: ${FontSizes.TWO};
    color: ${Colors.AMARELO_ESCURO};
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
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

const ButtonSecondary = styled.button`
    width: 50%;
    height: 40px;
    background: ${Colors.CINZA_MEDIO};
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
        background-color: ${Colors.AZUL_ESCURO};
    }
`;

const CardWrapper = styled.div`
    width: 250px;
    scroll-snap-align: start;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export function GameCard({ title, image, price, rating }) {
    return (
        <CardWrapper>
            <Card>
                <GameImage src={image} alt={`Capa do jogo ${title}`} />
                <GameInfo>
                    <TextWrapper>
                        <GameTitle>{title}</GameTitle>
                        <ButtonLink>VER AVALIAÇÕES</ButtonLink>
                    </TextWrapper>
                    <Rating>{'⭐'.repeat(rating)}</Rating>
                    <Price>R$ {price}</Price>
                    <ButtonWrapper>
                        <Button>Comprar</Button>
                        <ButtonSecondary>Saiba Mais</ButtonSecondary>
                        <LikeButton />
                    </ButtonWrapper>
                </GameInfo>
            </Card>
        </CardWrapper>
    );
}
