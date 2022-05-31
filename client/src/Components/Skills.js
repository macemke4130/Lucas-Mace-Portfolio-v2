import React from 'react';
import { useState } from 'react';

import { SkillsContainer } from "./Styles/Skills.Style";

import Skill from './Skill';

function Skills() {
    const [skills] = useState(["React", "GraphQL", "TypeScript", "JavaScript", "UX/UI", "MySQL", "Node JS", "Express JS", "JSON", "JQuery", "REST", "HTML", "CSS", "Styled Components", "SPAs", "GitHub", "Heroku", "VTEX", "Adobe Suite"]);

    return (
        <>
            <SkillsContainer>
                {skills.map(skill => (
                    <Skill key={skill + "key"} title={skill} />
                ))}
            </SkillsContainer>
        </>
    );
}

export default Skills;