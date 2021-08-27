import React from 'react';
import styled from 'styled-components';
import {CrewProptypes} from '../../../proptypes/CrewProptypes';

const ITEM = styled.div`
	ul {
		width: 30rem;
		margin: 0.5rem;
		text-align: center;
		padding: 1rem;
		background-color: rgb(14, 221, 193);
		box-shadow: 3px 3px 5px rgb(198, 200, 200);
		border-radius: 10px;
	}
	li {
		list-style: none;
		margin: 0.5rem;
	}
`;

function CrewItem(props) {
	const {name} = props;
	return (
		<ITEM>
			<ul>
				<li>{name}</li>
			</ul>
		</ITEM>
	);
}

CrewItem.propTypes = CrewProptypes;

export default CrewItem;
