import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	FontFamilies,
	FontLetterSpacings,
	FontSizes,
	Spaces,
} from '../../shared/DesignTokens';
import searchIcon from '../../assets/icons/search.svg';
const Wrapper = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 16px 1fr;
	gap: ${Spaces.TWO};
	padding: ${Spaces.NONE} ${Spaces.TWO};
	border:2px solid ${Colors.BRANCO};
	border-radius: ${BorderRadiuses.TWO};
	height: 35px;
`;
const Icon = styled.img.attrs({
	src: searchIcon,
})`
	width: 20px;
	height: 20px;
	color: ${Colors.BRANCO}
`;
const Input = styled.input`
	font-size: ${FontSizes.ONE_QUARTER};
	font-family: ${FontFamilies.PRIMARY};
	border: none;
	outline: none;
	color: ${Colors.CINZA_MEDIO};
	background: none;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	&:placeholder {
		color: ${Colors.CINZA_MEDIO};
		opacity: 1;
	}
	&:-ms-input-placeholder {
		color: ${Colors.BRANCO};
	}
`;
export function SearchField(props) {
	return (
		<Wrapper>
			<Icon />
			<Input {...props} type="text" />
		</ Wrapper>
	);
}