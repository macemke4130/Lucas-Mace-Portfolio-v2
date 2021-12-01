import styled from 'styled-components';
import { font, mainColor } from "./SSOT.Style";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${mainColor};
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-bottom: 3rem;
`;

export const BannerImg = styled.img`
    height: 15rem;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
`;

export const FaceImg = styled.img`
    position: absolute;
    top: 1rem;
    width: 18rem;
    border-radius: 50%;
    border: 0.5em solid ${mainColor};
`;

export const HeadlineOne = styled.h1`
    font-family: ${font};
    font-size: 3rem;
    text-align: center;
    margin-bottom: 0;
    z-index: 1;
`;

export const HeadlineTwo = styled.h2`
    font-family: ${font};
    font-size: 2rem;
    text-align: center;
    margin: 0;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
`;