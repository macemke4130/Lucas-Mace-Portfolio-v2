import React from 'react';

// Styles --
// import { Main, Header, HeadlineOne, HeadlineTwo, Content } from "./Styles/Home.Style";
import { SkillCard, SkillText } from "./Styles/Skills.Style";

function Skill(props) {
    return (
        <SkillCard>
            <SkillText>{props.title}</SkillText>
        </SkillCard>
    );
}

export default Skill;