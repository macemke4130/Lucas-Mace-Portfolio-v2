import React from 'react';

// Styles --
import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "../Components/Styles/Home.Style";
import { CenteredParagraph, Anchor } from '../Components/Styles/Bio.Style';

// Components --
import Banner from "../Components/Banner";
import Face from "../Components/Face";
import Nav from '../Components/Nav';

// Images --
import banner from "../images/banner.jpg";
import face from "../images/face.jpg";
import { CenteredFlexCol } from '../Components/Styles/SSOT.Style';

function Contact() {
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
                <CenteredFlexCol>
                    <CenteredParagraph><Anchor href="mailto:lucasmace4130@gmail.com">lucasmace4130@gmail.com</Anchor></CenteredParagraph>
                    <CenteredParagraph><Anchor href="https://www.linkedin.com/in/lucas-mace-7857b1103/" target="_blank">LinkedIn</Anchor></CenteredParagraph>
                    <CenteredParagraph><Anchor href="https://www.instagram.com/lucasmacephoto/" target="_blank">Instagram</Anchor></CenteredParagraph>
                </CenteredFlexCol>
            </Content>
        </Main>
    );
}

export default Contact;