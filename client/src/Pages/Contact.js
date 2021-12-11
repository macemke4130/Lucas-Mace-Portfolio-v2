import React from 'react';

// Styles --
import { CenteredParagraph, Anchor } from '../Components/Styles/Bio.Style';
import { CenteredFlexCol } from '../Components/Styles/SSOT.Style';

function Contact() {
    return (
        <CenteredFlexCol>
            <CenteredParagraph><Anchor href="mailto:lucasmace4130@gmail.com">lucasmace4130@gmail.com</Anchor></CenteredParagraph>
            <CenteredParagraph><Anchor href="https://www.linkedin.com/in/lucas-mace-7857b1103/" target="_blank">LinkedIn</Anchor></CenteredParagraph>
            <CenteredParagraph><Anchor href="https://www.instagram.com/lucasmacephoto/" target="_blank">Instagram</Anchor></CenteredParagraph>
        </CenteredFlexCol>
    );
}

export default Contact;