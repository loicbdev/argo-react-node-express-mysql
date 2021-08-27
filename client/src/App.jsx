import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CrewCreate from './components/views/CrewCreate/CrewCreate';
import CrewList from './components/views/CrewList/CrewList';
import CrewContextProvider from './contexts/CrewContext';

function App() {
	return (
		<CrewContextProvider>
			<div className='App'>
				<Header />
				<CrewCreate />
				<CrewList />
				<Footer />
			</div>
		</CrewContextProvider>
	);
}

export default App;
