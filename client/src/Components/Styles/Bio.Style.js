import styled from 'styled-components';
import { font } from "./SSOT.Style";

export const Paragraph = styled.p`
    font-family: ${font};
    color: black;
    font-size: 1rem;
    width: 90%;
    max-width: 60ch;
    margin-top: 1rem;
    text-align: justify;
`;

export const CenteredParagraph = styled.p`
    font-family: ${font};
    color: black;
    font-size: 1rem;
    width: 90%;
    max-width: 60ch;
    margin-top: 1rem;
    text-align: center;
`;

export const Anchor = styled.a`
    color: black;
`;