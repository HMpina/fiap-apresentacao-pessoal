import React from 'react';
import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontLineHeights,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
import { TextTwo } from '../TextTwo/TextTwo';
const BoxNavMenu = styled.h2`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.FOUR};
	justify-content: right;
	align-items: right;
	color: ${(props) => props.color};
	margin: 0;
	padding: 100;
`;
BoxNavMenu.defaultProps = {
	color: Colors.NEUTRAL_WHITE,
};



export function NavMenu() {
	return (
		<>
			<TextTwo>Home</TextTwo>
			<TextTwo>Sobre Mim</TextTwo>
			<TextTwo>Formação</TextTwo>
			<TextTwo>Experiência</TextTwo>
			<TextTwo>Hobbies</TextTwo>
		</>
	);
}