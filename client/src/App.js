import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./styles.css";

// Pages --
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Resume from './Pages/Resume';


// Components --
import Nav from './Components/Nav';
import FooterBar from "./Components/Footer";

// Styles --
import { Main, Content, HeadlineOne, HeadlineTwo } from "./Components/Styles/Home.Style";
import HeaderContainer from './Components/Header';

function App() {
	return (
		<>
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
								<Projects />
							</Route>
							<Route path="/resume">
								<Nav />
								<Resume />
							</Route>
							<Route path="/contact">
								<Nav />
								<Contact />
							</Route>
						</Switch>
					</Router>
				</Content>
			</Main>
			<FooterBar />
		</>
	)
}

export default App;