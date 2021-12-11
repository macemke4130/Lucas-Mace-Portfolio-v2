import React from 'react';

// Styles --
import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "../Components/Styles/Home.Style";

// Components --
import Banner from "../Components/Banner";
import Face from "../Components/Face";
import Nav from '../Components/Nav';
import Skills from '../Components/Skills';

// Images --
import banner from "../images/banner.jpg";
import face from "../images/face.jpg";

function Home() {
    return (
        <Main>
            <Header>
                <Banner id="header" src={banner} />
                <Face id="face" src={face} />
            </Header>
            
            <Content>
                <HeadlineOne>Lucas Mace</HeadlineOne>
                <HeadlineTwo>Full Stack Web Developer</HeadlineTwo>
                <Nav />
                <Skills />
            </Content>
        </Main>
    );
}

export default Home;