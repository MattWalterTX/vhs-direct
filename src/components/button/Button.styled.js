import styled from "styled-components";

export const Button = styled.button`
    background-color: rgb(229, 160, 250);
    color: black;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5vh;
    font-weight: 550;
    height: 3vh;
    width: 12vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SigninButton = styled(Button)`
    margin-right: 2vw;
`;

export const HeroButton = styled(Button)`
    width: 10vw;
`;

export const BrowseButton = styled(HeroButton)`
    align-self: center;
    text-align: center;
`;
