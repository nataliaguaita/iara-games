import styled from 'styled-components';
import { Gradient, Colors, FontWeights, BorderRadiuses, Spaces, FontSizes, Shadows } from '../../shared/DesignTokens';

export const ButtonPrimary = styled.button`
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