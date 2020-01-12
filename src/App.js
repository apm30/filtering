import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';

function App() {
	const [names, setNames] = useState(['John Doe']);

	const addName = newName => {
		console.log('newName', newName);
		setNames([...names, newName]);
		console.log('names', names);
	};

	return (
		<div className="App">
			<header className="App-header">Filtering</header>
			<main className="App-content">
				{names.map(name => (
					<ListItem name={name}></ListItem>
				))}
				<button onClick={() => addName('Jane Doe')}>add</button>
			</main>
			<footer className="App-footer">Footer</footer>
		</div>
	);
}

export default App;
