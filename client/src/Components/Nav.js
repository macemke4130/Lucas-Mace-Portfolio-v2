import { NavButton, PageTitle, CenteredNavRow } from "./Styles/Nav.Style.js";
import { CenteredFlexCol } from "./Styles/SSOT.Style";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
    const [pageTitle, setPageTitle] = useState("");
    const history = useHistory();
    const location = useLocation();

    const handleNavClick = (event) => {
        // Isolates Nav Button Inner Text --
        const path = event.target.innerText.toLowerCase();

        // Gets URL --
        history.push(path === "skills" ? "/" : "/" + path);
    }

    const handleKeyUp = (event) => {
        if (event.code !== "Enter") return;
        handleNavClick(event);
    }

    // Get path from URL and set pageTitle --
    useEffect(() => {

        // Strips the "/" from the url --
        const route = location.pathname.substring(1, location.pathname.length);

        // If route is blank (root), populate "Skills". Otherwise populate with route --
        setPageTitle(route === "" ? "skills" : route);
    }, [pageTitle, location.pathname]);

    return (
        <CenteredFlexCol>
            <CenteredNavRow>
                {pageTitle === "skills" ? "" : <NavButton onKeyUp={handleKeyUp} onClick={handleNavClick}>Skills</NavButton>}
                {pageTitle === "bio" ? "" : <NavButton onKeyUp={handleKeyUp} onClick={handleNavClick}>Bio</NavButton>}
                {pageTitle === "projects" ? "" : <NavButton onKeyUp={handleKeyUp} onClick={handleNavClick}>Projects</NavButton>}
                {pageTitle === "resume" ? "" : <NavButton onKeyUp={handleKeyUp} onClick={handleNavClick}>Resume</NavButton>}
                {pageTitle === "contact" ? "" : <NavButton onKeyUp={handleKeyUp} onClick={handleNavClick}>Contact</NavButton>}
            </CenteredNavRow>
            <PageTitle>{pageTitle}</PageTitle>
        </CenteredFlexCol>
    )
}

export default Nav;