import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

function App() {
	return (
		<div className="App">
			<header className="App-header">Filtering</header>
			<main className="App-content">
				{['frank', 'jane'].map(person => (
					<ListItem name={person}></ListItem>
				))}
				<AddItem></AddItem>
			</main>
			<footer className="App-footer">Footer</footer>
		</div>
	);
}

export default App;
