import React from 'react';

import { Flex, Box } from 'reflexbox';
import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
import { TextTwo } from '../common-components/TextTwo/TextTwo';
import { Spaces } from '../shared/DesignTokens';
export function Home() {
	return (
		<>
		<Box pt={Spaces.FIVE} ml={Spaces.FOUR} mb={Spaces.FIVE}>
				<HeadingOne>Resumo</HeadingOne>
				<TextTwo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc massa nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium senectus dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius auctor quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas velit sit feugiat ultricies.
Id ac placerat dolor sem nequ	e elit. Ut nisl turpis nisi etiam ac nibh.</TextTwo>
		</Box>
		<Box pt={Spaces.FIVE}ml={Spaces.TWO} mb={Spaces.FIVE}>
		<HeadingTwo>Citações Preferidas</HeadingTwo>
		</Box>
			<Flex
				width={['100%', '800px']}
				mx={[Spaces.None, 'auto']}
				mt={[Spaces.THREE, Spaces.FIVE]}
				px={[Spaces.ONE, Spaces.NONE]}
				mb={[Spaces.TWO, Spaces.FOUR]}
				>
				<Box flexGrow="1">
					<div />
				</Box>
				<Box mb={Spaces.TWO} ml={Spaces.TWO}>
					<TextTwo>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id.”</TextTwo>
					<TextTwo>(Lorem ipsum dolor sit amet)</TextTwo>
				</Box>
			</Flex>
		</>
	);
}