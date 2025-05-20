import styled from 'styled-components';
import {
	Colors,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
	FontSizes,
} from '../../shared/DesignTokens';
export const LinkNavBar = styled.a`
    width: auto;
    text-align: center;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
    font-size: ${FontSizes.ONE_QUARTER};
	color: ${Colors.BRANCO};
	padding: ${Spaces.ONE} ${Spaces.ONE};
	cursor: pointer;
	transition: 200ms all ease;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	&:hover {
		font-weight: ${FontWeights.REGULAR};
	}
`;