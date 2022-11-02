import React from 'react';
import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
import { InfoPessoal } from '../components/InfoPessoal/InfoPessoal';

export function SobreMim() {
	return (
		<>
		<HeadingOne>Informações Pessoais</HeadingOne>

		<InfoPessoal
		cidade="Jundiaí"
		estado="SP"
		logradouro="Rua Sérgio Gregio, 50"
		complemento="Casa 1A"
		/>

		</>
	);
}