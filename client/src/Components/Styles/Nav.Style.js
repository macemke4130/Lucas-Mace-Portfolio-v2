import styled from 'styled-components';
import { font, compColor } from "./SSOT.Style";

export const KeyboardUserContainer = styled.a`
    display: flex;
    align-items: center;
    font-family: ${font};
    font-weight: bold;
    font-size: 0.9rem;
    position: absolute;
    top: -100%;
    text-align: center;
    padding: 1.25rem;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    left: 2rem;
    text-decoration: none;
    color: white;
    aspect-ratio: 1;
    border: 0.5em solid #bfdcf8;;
    transform: rotate(180deg);
    z-index: 2;

    transition-property: top, transform;
    transition-duration: 500ms;
    transition-timing-function: ease-out;

    &:focus {
        top: 1rem ;
        transform: rotate(-12deg);
    }
`;

export const CenteredNavRow = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const NavButton = styled.button`
    width: 8rem;
    text-align: center;
    z-index: 2;
    text-align: center;
    font-family: ${font};
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
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