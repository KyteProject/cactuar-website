import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';

const Application = () => {
	return (
		<main className="container body-wrapper">
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</main>
	);
};

export default Application;
