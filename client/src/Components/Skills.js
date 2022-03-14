import React from 'react';
import { useState } from 'react';

// Styles --
// import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "./Styles/Home.Style";
import { SkillsContainer } from "./Styles/Skills.Style";

import Skill from './Skill';

function Skills() {
    const [skills] = useState(["React", "GraphQL", "TypeScript", "JavaScript", "MySQL", "Node JS", "Express JS", "JSON", "JQuery", "REST", "HTML", "CSS", "PHP", "GitHub", "VTEX", "Adobe Suite"]);

    return (
        <>
            <SkillsContainer>
                { skills.map(skill => (
                    <Skill key={skill + "key"} title={skill} />
                )) }
            </SkillsContainer>
        </>
    );
}

export default Skills;