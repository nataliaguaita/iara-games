import styled from 'styled-components';
import { Colors, Spaces } from '../../shared/DesignTokens';
import IaraGamesLogo from '../../assets/images/logo-branco-iara.png';
import { BuyButton, UserButton } from '../Button/Button';
import { LinkNavBar } from '../ButtonLink/LinkNavBar';
import { SearchField } from '../SearchField/SearchField';
const Nav = styled.nav`
	width: 100%;
	height: 60px;
	position: fixed;
	background-color: ${Colors.CINZA_ESCURO};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 1024px) {
    height: 65px;
	}
`;

const Logo = styled.img.attrs({
	src: IaraGamesLogo,
	alt: 'Logo do "Iara Games"',
})`
	height: 100%;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: ${Spaces.ONE};
`;

export function NavBar() {
	return (
		<Nav>
			<Logo />
			<ButtonsWrapper>
				<LinkNavBar>Categorias de Jogos</LinkNavBar>
				<LinkNavBar>Publique seu Jogo</LinkNavBar>
				<LinkNavBar>Sobre Iara</LinkNavBar>
				<SearchField placeholder='Buscar Jogos' />
				<BuyButton>Carrinho</BuyButton>
				<UserButton ghost>Entrar</UserButton>
			</ButtonsWrapper>
		</Nav>
	);
}
