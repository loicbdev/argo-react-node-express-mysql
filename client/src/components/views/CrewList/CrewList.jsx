import React, {useContext} from 'react';
import styled from 'styled-components';
import {CrewContext} from '../../../contexts/CrewContext';
import CrewItem from './CrewItem';

const CREW = styled.div`
	.crewsListTitle {
		margin: 3rem;
		text-align: center;
	}
	.crewsList {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1rem 10rem;
		align-items: center;
	}
`;

function CrewList() {
	const {crews} = useContext(CrewContext);

	return (
		<CREW>
			<h2 className='crewsListTitle'>Membres de l'équipage</h2>
			<div className='crewsList'>
				{crews.map((crew) => (
					<CrewItem key={crew.id} {...crew} />
				))}
			</div>
		</CREW>
	);
}

export default CrewList;
