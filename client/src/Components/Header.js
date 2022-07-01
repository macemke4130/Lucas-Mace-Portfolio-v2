import React from 'react';

// Styles --
import { KeyboardUserContainer } from "./Styles/Nav.Style";
import { Header } from "./Styles/Home.Style";

// Conponents --
import Banner from './Banner';
import Face from './Face';

// Images --
import banner from "../images/banner.jpg";
import face from "../images/face.jpg";

function HeaderContainer() {
    const page = window.location.pathname;

    return (
        <>
            <KeyboardUserContainer href={page !== "/bio" ? `/bio` : `/`}>
                Jump to {page !== "/bio" ? `Bio` : `Skills`}
            </KeyboardUserContainer>
            <Header>
                <Banner id="header" src={banner} />
                <Face id="face" src={face} />
            </Header>
        </>
    );
}

export default HeaderContainer;