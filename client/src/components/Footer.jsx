import React from 'react';
import styled from 'styled-components';

const FOOTER = styled.div`
margin-top: 11em;
text-align: center;
width: 100%;
color: #fff;
background: #f76c6c;
padding: 0.25em 0;
bottom: 0;
`;

const Footer = () => {
  return (
    <div>
      <FOOTER>
      <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </FOOTER>
    </div>
  );
};

export default Footer;
