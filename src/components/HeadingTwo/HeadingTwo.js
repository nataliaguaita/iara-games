import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const HeadingTwo = styled.h2`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.THREE};
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
`;
HeadingTwo.defaultProps = {
	color: Colors.CINZA_ESCURO,
};