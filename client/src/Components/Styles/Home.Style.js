import styled from 'styled-components';
import { font } from "./SSOT.Style";

export const Main = styled.main`
    display: grid;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-bottom: 2em;
`;

export const BannerImg = styled.img`
    height: 20em;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
`;

export const FaceImg = styled.img`
    position: absolute;
    top: 5em;
    width: 18em;
    border-radius: 1em;
    border: 0.5em solid white;
`;

export const HeadlineOne = styled.h1`
    font-family: ${font};
    font-size: 3em;
    text-align: center;
    margin-bottom: 0;
`;

export const HeadlineTwo = styled.h2`
    font-family: ${font};
    font-size: 2em;
    text-align: center;
    margin: 0;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;