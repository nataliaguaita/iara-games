import styled from "styled-components";
import { Colors, Spaces, FontSizes, FontWeights, BorderRadiuses, Shadows } from "../../shared/DesignTokens";
export const ButtonSecondary = styled.button`
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