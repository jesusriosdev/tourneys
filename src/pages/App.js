import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

import Teams from './Teams';
import Tourney from './Tourney';
import NotFound from './NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Teams} />
					<Route exact path="/tourney/:tourneyId" component={Tourney} />
					<Route exact path="/teams" component={Teams} />
					<Route exact path="/equipos" component={Teams} />
					<Route exact path="/liga" component={() => <Tourney tourney_type_id={2} />} />
					<Route exact path="/copa" component={() => <Tourney tourney_type_id={3} />} />
					{/* <Route exact path="/champions" component={() => <Tourney tourney_type_id={4} />} /> */}
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
