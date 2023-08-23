import styled from "styled-components";

export const Button = styled.button`
    background-color: rgb(229, 160, 250);
    color: black;
    font-family: 'Russo One', sans-serif;
    font-size: 2vh;
    height: 6vh;
    width: 20vw;
`;

export const SigninButton = styled(Button)`
    justify-self: flex-end;
    margin-top: 1%;
    width: 10vw;
`;

export const HeroButton = styled(Button)`
    width: 10vw;
`;

export const BrowseButton = styled(HeroButton)`
    align-self: center;
    text-align: center;
`;
