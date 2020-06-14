import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

import Matches from '../pages/Matches';
import Teams from '../pages/Teams';
import NotFound from '../pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Matches} />
					<Route exact path="/matches" component={Matches} />
					<Route exact path="/teams" component={Teams} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
