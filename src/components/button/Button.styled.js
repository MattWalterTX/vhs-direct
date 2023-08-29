import styled from "styled-components";

export const Button = styled.button`
    background-color: rgb(229, 160, 250);
    color: black;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    font-weight: 550;
    height: 2rem;
    width: 10rem;
`;

export const SigninButton = styled(Button)`
    margin-right: 4vw;
`;

export const HeroButton = styled(Button)`
    width: 10vw;
    height: 4vh;
`;

export const BrowseButton = styled(HeroButton)`
    align-self: center;
    text-align: center;
`;
