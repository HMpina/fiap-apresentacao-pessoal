import React from 'react';
import styled from 'styled-components';
import { Colors, Spaces } from '../../shared/DesignTokens';
import henriquePinaLogo from '../../assets/images/HenriquePina.svg';
import { NavMenu } from '../NavMenu/NavMenu';
const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${Colors.BG_BLACK};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: left;
	align-items: left;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;
const Logo = styled.img.attrs({
	src: henriquePinaLogo,
	alt: 'Logo escrito "Henrique Pina"',
})`
	height: 70%;
`;


export function Header() {
	return (
		<Wrapper>
			<Logo />
			<NavMenu />
		</Wrapper>
	);
}