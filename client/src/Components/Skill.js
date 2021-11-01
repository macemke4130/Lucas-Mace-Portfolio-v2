import React from 'react';

// Styles --
import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "./Styles/Home.Style";
import { SkillCard } from "./Styles/Skills.Style";

function Skill(props) {
    return (
        <SkillCard>
            <h1>{props.title}</h1>
        </SkillCard>
    );
}

export default Skill;