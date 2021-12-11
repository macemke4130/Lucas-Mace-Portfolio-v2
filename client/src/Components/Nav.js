import { NavButton, PageTitle, CenteredNavRow } from "./Styles/Nav.Style.js";
import { CenteredFlexCol } from "./Styles/SSOT.Style";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
    const [pageTitle, setPageTitle] = useState("");
    const history = useHistory();
    const location = useLocation();

    const handleSkillsClick = () => {
        history.push("/");
    }

    const handleBioClick = () => {
        history.push("/bio")
    }

    const handleContactClick = () => {
        history.push("/contact")
    }

    // Get path from URL and set pageTitle --
    useEffect(() => {
        // Strips the "/" from the url --
        const route = location.pathname.substr(1, location.pathname.length);

        // If route is blank (root), populate "Skills". Otherwise populate with route --
        setPageTitle(route === "" ? "skills" : route);
    }, [pageTitle, location.pathname]);

    return (
        <CenteredFlexCol>
            <CenteredNavRow>
                {pageTitle === "skills" ? "" : <NavButton onClick={handleSkillsClick}>Skills</NavButton>}
                {pageTitle === "bio" ? "" : <NavButton onClick={handleBioClick}>Bio</NavButton>}
                {pageTitle === "projects" ? "" : <NavButton>Projects</NavButton>}
                {pageTitle === "resume" ? "" : <NavButton>Resume</NavButton>}
                {pageTitle === "contact" ? "" : <NavButton onClick={handleContactClick}>Contact</NavButton>}
            </CenteredNavRow>
            <PageTitle>{pageTitle}</PageTitle>
        </CenteredFlexCol>
    )
}

export default Nav;