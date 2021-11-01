import React from 'react';

// Styles --
import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "./Styles/Home.Style";
import { SkillsContainer } from "./Styles/Skills.Style";

import Skill from './Skill';

function Skills() {
    return (
        <>
            <SkillsContainer>
                <Skill title="React" />
                <Skill title="GraphQL" />
                <Skill title="TypeScript" />
                <Skill title="JavaScript" />
                <Skill title="Express" />
                <Skill title="REST" />
                <Skill title="HTML" />
                <Skill title="CSS" />
                <Skill title="Adobe Creative" />
            </SkillsContainer>
        </>
    );
}

export default Skills;