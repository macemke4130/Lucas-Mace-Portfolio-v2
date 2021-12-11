import React from 'react';

// Styles --
import { Header } from "./Styles/Home.Style";

// Conponents --
import Banner from './Banner';
import Face from './Face';

// Images --
import banner from "../images/banner.jpg";
import face from "../images/face.jpg";

function HeaderContainer() {
    return (
        <>
            <Header>
                <Banner id="header" src={banner} />
                <Face id="face" src={face} />
            </Header>
        </>
    );
}

export default HeaderContainer;