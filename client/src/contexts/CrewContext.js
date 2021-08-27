import { useState, useEffect } from 'react';
import { findAll } from '../services/CrewApi';

const { createContext } = require('react');

export const CrewContext = createContext(null);

function CrewContextProvider(props) {
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    findAll((response) => {
      setCrews(response);
    });
  }, []);

  return (
    <CrewContext.Provider value={{ crews, setCrews }}>
      {props.children}
    </CrewContext.Provider>
  );
}

export default CrewContextProvider;
