import React from 'react';
import { useEffect, useState } from 'react';

import { api } from "../utils/api";

// Styles --
import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "../Components/Styles/Home.Style";

// Components --
import Banner from "../Components/Banner";
import Face from "../Components/Face";
import Skills from '../Components/Skills';
import About from "../Components/About";

// Images --
import banner from "../images/banner.jpg";
import face from "../images/face.jpg";

function Home() {
    const [openGate, setOpenGate] = useState(true);
    const [greeting, setGreeting] = useState("World");

    const getGreeting = async () => {
        setOpenGate(false);

        const r = await api("/greeting");
        setGreeting(r);
    }

    useEffect(() => {
        if (openGate) getGreeting();
    });

    return (
        <Main>
            <Header>
                <Banner id="header" src={banner} />
                <Face id="face" src={face} />
            </Header>
            <Content>
                <HeadlineOne>Lucas Mace</HeadlineOne>
                <HeadlineTwo>Full Stack Web Developer</HeadlineTwo>
                <Skills />
                {/* <About /> */}
            </Content>
        </Main>
    );
}

export default Home;