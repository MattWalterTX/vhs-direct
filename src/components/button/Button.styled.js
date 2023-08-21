import styled from "styled-components";

export const Button = styled.button`
    background-color: rgb(229, 160, 250);
    color: black;
    font-family: 'Russo One', sans-serif;
    height: 2.5em;
    width: 20em;
    margin: 1.5em;
`;

export const HeroButton = styled(Button)`
    margin: .5em;
    width: 12.5em;
`;

export const SigninButton = styled(Button)`
    margin: 1.5em;
    width: 10em;
`;

export const BrowseButton = styled(HeroButton)`
    align-self: center;
`;
