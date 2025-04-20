import styled from 'styled-components';
import { FontSizes, Colors, Spaces, BorderRadiuses, Shadows, FontWeights } from '../../shared/DesignTokens';

const Card = styled.div`
    width: 200px;
    background-color: ${Colors.BRANCO};
    border-radius: ${BorderRadiuses.TWO};
    box-shadow: ${Shadows.TWO};
    overflow: hidden;
    text-align: left;
`;

const GameImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const GameInfo = styled.div`
    padding: ${Spaces.TWO};
`;

const GameTitle = styled.h3`
    font-size: ${FontSizes.TWO};
    margin-bottom: ${Spaces.ONE};
    margin-top: 0;
    color: ${Colors.CINZA_ESCURO};
`;

const Price = styled.p`
    font-size: ${FontSizes.ONE_QUARTER};
    font_weight: ${FontWeights.BOLD};
    color: ${Colors.VERDE_ESCURO};
    margin-bottom: ${Spaces.ONE};
    margin-top: 0;

`;

const Rating = styled.span`
    font-size: ${FontSizes.ONE};
    color: ${Colors.AMARELO_ESCURO};
`;

const CardWrapper = styled.div`
    width: 250px;
    scroll-snap-align: start;
`;

export function GameCard({ title, image, price, rating }) {
    return (
        <CardWrapper>
            <Card>
                <GameImage src={image} alt={`Capa do jogo ${title}`} />
                <GameInfo>
                    <GameTitle>{title}</GameTitle>
                    <Price>R$ {price}</Price>
                    <Rating>{'⭐'.repeat(rating)}</Rating>
                </GameInfo>
            </Card>
        </CardWrapper>
    );
}
