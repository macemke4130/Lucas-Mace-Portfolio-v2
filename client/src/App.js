import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./styles.css";

import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
// import Projects from "./Pages/Projects";
// import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import FooterBar from "./Components/Footer";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
						<FooterBar />
					</Route>
					<Route path="/bio">
						<Bio />
						<FooterBar />
					</Route>
					<Route path="/projects">

					</Route>
					<Route path="/resume">

					</Route>
					<Route path="/contact">
						<Contact />
						<FooterBar />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App;