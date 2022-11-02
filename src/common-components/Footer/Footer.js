import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox';
import { Colors, Spaces } from '../../shared/DesignTokens';
import { Button } from '../Button/Button';
import { HeadingTwo } from '../HeadingTwo/HeadingTwo';
import { MiniSubtitle } from '../MiniSubtitle/MiniSubtitle';
const Wrapper = styled.footer`
	width: 100%;
	height: 260px;
	background-color: ${Colors.BG_BLACK};
	padding: ${Spaces.TWO};
	display: flex-end;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 290px;
	}
`;


export function Footer() {
	return (
		<>
					
				<Flex
				width={['100%', '600px']}
				mx={[Spaces.None, 'auto']}
				mt={[Spaces.THREE, Spaces.FIVE]}
				px={[Spaces.ONE, Spaces.NONE]}
				mb={[Spaces.TWO, Spaces.FOUR]}
			>
			<Wrapper>

    	        <HeadingTwo>Interessado Em Meu Trabalho?</HeadingTwo>
        	    <MiniSubtitle>Baixe Meu CV Para Conhecer Mais Sobre Mim</MiniSubtitle>
				<Button>Download CV</Button>
			</Wrapper>
			</Flex>
		</>
	);
}