import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./styles.css";

// Pages --
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Contact from "./Pages/Contact";
import FooterBar from "./Components/Footer";

// Components --
import Nav from './Components/Nav';

// Styles --
import { Main, Content, HeadlineOne, HeadlineTwo } from "./Components/Styles/Home.Style";
import HeaderContainer from './Components/Header';

function App() {
	return (
		<Main>
			<HeaderContainer />
			<Content>
				<HeadlineOne>Lucas Mace</HeadlineOne>
				<HeadlineTwo>Full Stack Web Developer</HeadlineTwo>
				<Router>
					<Switch>
						<Route exact path="/">
							<Nav />
							<Home />
						</Route>
						<Route path="/bio">
							<Nav />
							<Bio />
						</Route>
						<Route path="/projects">
							<Nav />

						</Route>
						<Route path="/resume">
							<Nav />

						</Route>
						<Route path="/contact">
							<Nav />
							<Contact />
						</Route>
					</Switch>
				</Router>
			</Content>
			<FooterBar />
		</Main>
	)
}

export default App;