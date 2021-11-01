import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Projects from "./Pages/Projects";
// import Resume from "./Pages/Resume";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					
				</Route>
				<Route path="/projects">
					
				</Route>
				<Route path="/resume">
					
				</Route>
			</Switch>
		</Router>
	)
}

export default App;