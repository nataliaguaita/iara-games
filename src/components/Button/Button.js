import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    Shadows,
    Spaces,
    FontLetterSpacings,
    FontFamilies,
    FontWeights,
    FontSizes,
} from '../../shared/DesignTokens';
import BuyIconImg from '../../assets/icons/local_mall.svg';
import UserIconImg from '../../assets/icons/user.svg';
const Button = styled.button`
	border: none;
	outline: none;
	width: auto;
	height: 35px;
    gap: 3px;
    display: flex;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${(props) =>
        props.ghost ? Colors.VERDE_CLARO : Colors.AMARELO_ESCURO};
	color: ${Colors.CINZA_ESCURO};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
    letter-spacing: ${FontLetterSpacings.MEDIUM};
	font-size: ${FontSizes.ONE_QUARTER};
	&:hover {
	background-color: ${Colors.BRANCO};
    }
`;
const Icon = styled.img`
    width: 20px;
    height: 20px;
    
`;

export function BuyButton(props) {
    return <Button {...props}>
        <Icon src={BuyIconImg} alt="ícone de cesta de compras" />
        {props.children}
    </Button>

};
export function UserButton(props) {
    return <Button {...props}>
        <Icon src={UserIconImg} alt="ícone de usuário" />
        {props.children}
    </Button>

};