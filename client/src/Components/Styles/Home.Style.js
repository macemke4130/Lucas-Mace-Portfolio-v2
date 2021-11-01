import styled from 'styled-components';

export const Main = styled.main`
    display: grid;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-bottom: 4em;
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