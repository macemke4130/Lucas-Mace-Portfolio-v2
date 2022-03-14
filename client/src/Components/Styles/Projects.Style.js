import styled from 'styled-components';
import { font } from "./SSOT.Style";

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem;
    max-Width: 25rem;
    width: 100%;
`;

export const ProjectTitle = styled.h2`
    font-family: ${font};
    font-size: 1.5rem;
    text-align: center;
`;

export const ProjectImage = styled.img`
    width: 75%;
    border-radius: 1rem;
    border-bottom-right-radius: 0;
    border: 1px solid black;
`;

export const ProjectDescription = styled.p`
    font-family: ${font};
    font-size: 1rem;
    text-align: justify;
    margin: 0.5rem 0;
`;

export const TechStackTitle = styled.p`
    font-family: ${font};
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;

export const TechStack = styled.p`
    font-family: ${font};
    font-size: 0.8rem;
    text-align: center;
`;

export const LiveProjectLink = styled.a`
    display: block;
    font-family: ${font};
    color: black;
    fontSize: "0.5rem";
    text-align: center;
    text-decoration: underline;
`;

export const GitHubLink = styled.a`
    display: block;
    font-family: ${font};
    color: black;
    fontSize: "0.5rem";
    text-align: center;
    text-decoration: underline;
`;