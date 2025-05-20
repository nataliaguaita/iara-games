import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
    FontLetterSpacings,
} from '../../shared/DesignTokens';
export const Description = styled.span`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	line-height: ${FontLineHeights.SMALL};
	font-size: ${FontSizes.TWO};
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
`;
Description.defaultProps = {
	color: Colors.CINZA_MEDIO,
};