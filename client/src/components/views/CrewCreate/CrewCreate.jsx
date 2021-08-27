import React, {useContext, useState} from 'react';
import axios from 'axios';
import {findAll} from '../../../services/CrewApi';
import {CrewContext} from '../../../contexts/CrewContext';
import styled from 'styled-components';

const CREATE = styled.div`
	.createForm {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		text-align: center;
		margin-top: 1rem;
	}
	button {
		margin: 0.5rem;
	}
`;

function CrewCreate() {
	const [crew, setCrew] = useState({name: ''});
	const {setCrews} = useContext(CrewContext);

	const submit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:8080/crew', crew).then(
			(response) => {
				console.log(response);
				findAll((result) => {
					setCrews(result);
				});
			},
			(error) => {
				console.error(error);
			}
		);
	};

	const change = (event) => {
		setCrew({
			...crew,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<CREATE>
			<form className='createForm' onSubmit={submit}>
				<h2 className='title'>Ajouter un(e) Argonaute</h2>
				<p>Nom de l&apos;Argonaute</p>
				<div className='inputs'>
					<label>
						<input type='text' name='name' placeholder="Charalampos" onChange={change} />
					</label>
					<button type='button' onClick={submit}>
						Envoyer
					</button>
				</div>
			</form>
		</CREATE>
	);
}

export default CrewCreate;
