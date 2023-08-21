import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo";
import { SigninButton } from "@components/button/Button"

const Container = styled.div`
    border: 1px solid green;
    display: flex;
    justify-content: space-between;
    padding: 0em 5em;
    position: absolute;
    width: 91%;
`;

const Header = () => {
    return (
        <Container>
            <Logo></Logo>
            <SigninButton>SIGN IN</SigninButton>
        </Container>
    )
}

export default Header