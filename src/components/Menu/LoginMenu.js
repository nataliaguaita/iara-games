import React, { useState } from 'react';
import { Menu, MenuItem, Divider, styled as muiStyled } from '@mui/material';
import styled from 'styled-components';
import UserIconImg from '../../assets/icons/user.svg';
import {
  FontFamilies, FontWeights, Colors, Shadows,
  BorderRadiuses, Spaces, FontLetterSpacings, FontSizes
} from '../../shared/DesignTokens';

const ButtonStyled = styled.button`
	border: none;
	outline: none;
	width: auto;
	height: 35px;
    gap: 3px;
    display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${(props) =>
        props.ghost ? Colors.VERDE_CLARO : Colors.AMARELO_ESCURO};
	color: ${Colors.CINZA_ESCURO};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.TWO};
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

// 🧱 Custom Menu
const CustomMenu = muiStyled(Menu)(({ theme }) => ({
	marginTop: '20px',
	'& .MuiPaper-root': {
		backgroundColor: 'rgba(27, 27, 27, 0.6)',
		backdropFilter: 'blur(8px)',
		border: '1px solid #8F8F8F',
		boxShadow: theme.shadows[5],
		borderRadius: '8px',
	},
}));

const CustomMenuItem = muiStyled(MenuItem)({
	color: 'white',
	fontSize: '13px',
	textTransform: 'uppercase',
	fontWeight: 500,
	letterSpacing: '1px',
});

// 🔹 Custom Divider
const CustomDivider = muiStyled(Divider)({
	backgroundColor: '#8F8F8F',
	height: '1px',
	margin: '8px 20px',
});

export function LoginMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (type) => {
		setAnchorEl(null);
		if (type) {
			console.log(`Redirecionar para login de ${type}`);
		}
	};

	return (
		<>
			<ButtonStyled onClick={handleClick}>
				<Icon src={UserIconImg} alt="ícone de usuário" />
				Login
			</ButtonStyled>
			<CustomMenu
				anchorEl={anchorEl}
				open={open}
				onClose={() => handleClose(null)}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				<CustomMenuItem onClick={() => handleClose('usuario')}>Login como Usuário</CustomMenuItem>
				<CustomDivider />
				<CustomMenuItem onClick={() => handleClose('desenvolvedor')}>Login como Desenvolvedor</CustomMenuItem>
			</CustomMenu>
		</>
	);
}
