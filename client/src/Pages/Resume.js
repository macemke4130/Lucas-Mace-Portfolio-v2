import React from 'react';
import Skill from '../Components/Skill';

// Styles --
import { CenteredFlexRow } from '../Components/Styles/SSOT.Style';
import { SkillAnchor } from '../Components/Styles/Skills.Style';

function Resume() {
    return (
        <>
            <CenteredFlexRow>
                <SkillAnchor href="./lucas-mace-web-dev-resume-2022.pdf" target="_blank">
                    <Skill title="Download" />
                </SkillAnchor>
            </CenteredFlexRow>

        </>
    );
}

export default Resume;