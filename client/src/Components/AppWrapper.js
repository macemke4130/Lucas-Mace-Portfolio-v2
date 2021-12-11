import React from 'react';

// Styles --
import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "../Components/Styles/Home.Style";
import { Paragraph, Anchor } from '../Components/Styles/Bio.Style';

// Components --
import Banner from "../Components/Banner";
import Face from "../Components/Face";
import Nav from '../Components/Nav';

// Images --
import banner from "../images/banner.jpg";
import face from "../images/face.jpg";

function AppWrapper() {
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
                <Paragraph>Hello! My name is Lucas.</Paragraph>
                <Paragraph>I am a Full Stack Web Developer who currently works primarily as a Front End Web and React Developer
                     for Erik's Bike Shop, the largest (depending on who you ask) bicycle and Winter sports shop in America.
                </Paragraph>
                <Paragraph>My favorite tech stack currently is React, GraphQL, Express and MySQL. If you're a bicycle nerd, 
                    you may enjoy my <Anchor href="http://www.namethatpart.com/" target="_blank">Name That Part</Anchor> game 
                    that utilizes those technologies.
                </Paragraph>
                <Paragraph>Previous to my developer career I worked as a bicycle mechanic for 10 years. In my free time, I still 
                    enjoy fixing bicycles, but they're much more fun to ride. I also love coffee, hiking, camping, skateboarding, 
                     photography and live music.
                </Paragraph>
                <Paragraph>I should also mention that I know how to center a div.</Paragraph>
            </Content>
        </Main>
    );
}

export default AppWrapper;