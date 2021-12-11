import styled from 'styled-components';
import { font, compColor } from "./SSOT.Style";

export const CenteredNavRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const NavButton = styled.div`
    width: 8rem;
    text-align: center;
    z-index: 2;
    text-align: center;
    font-family: ${font};
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem;
    padding: 0.25rem 1rem;
    border: 1px solid black;
    background-color: ${compColor};
    box-shadow: 0.1rem 0.1rem 0 0 black;
    border-radius: 1rem;
    border-top-left-radius: 0;
    user-select: none;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;

    &:hover {
        border-bottom-right-radius: 0rem;
        border-top-left-radius: 1rem;
    }
`;

export const PageTitle = styled.p`
    text-transform: capitalize;
    text-align: center;
    font-family: ${font};
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 0.5rem;
`;