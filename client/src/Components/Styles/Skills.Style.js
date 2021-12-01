import styled from 'styled-components';
import { font, compColor } from "./SSOT.Style";

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SkillCard = styled.div`
    font-family: ${font};
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${compColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 1rem;
    border-bottom-right-radius: 0;
    box-shadow: 0.2em 0.2em 0 black;
    padding: 1rem;
    margin: 0.5rem;
    width: 10rem;
    height: 4rem;
    text-align: center;
    user-select: none;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    &:hover {
        border-bottom-right-radius: 1rem;
        border-top-left-radius: 0rem;
    }
`;

export const SkillText = styled.p`
    /* padding: 1rem;
    margin: 1rem; */
`;