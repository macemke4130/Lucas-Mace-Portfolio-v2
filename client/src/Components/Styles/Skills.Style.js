import styled from 'styled-components';
import { font } from "./SSOT.Style";

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SkillCard = styled.div`
    font-family: ${font};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 1em;
    border-bottom-right-radius: 0;
    box-shadow: 0.2em 0.2em 0 black;
    width: 10em;
    height: 4em;
    margin: 1em;
    padding: 0.25em;
    text-align: center;
    user-select: none;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    &:hover {
        border-bottom-right-radius: 1em;
        box-shadow: 0.2em 0.2em 0.2em black;
    }
`;