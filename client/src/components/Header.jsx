import React from 'react';
import styled from 'styled-components';

const HEADER = styled.div`
	background: #f4f4f4;
	text-align: center;
	padding: 2em;
	.logo {
		max-width: 96px;
		margin: 0.5rem;
	}
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
        font-size: 2.5em;
	}
`;

const Header = () => {
	return (
		<div>
			<HEADER>
				<h1 className='title'>
					<img
						src='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png'
						alt='Wild Code School logo'
						className='logo'
					/>
					Les Argonautes
				</h1>
			</HEADER>
		</div>
	);
};

export default Header;