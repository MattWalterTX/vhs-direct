import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo";
import { SigninButton } from "@components/button/Button"

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 75vw;
    position: absolute;
    width: 100%;
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