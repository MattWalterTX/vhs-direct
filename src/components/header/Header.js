import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo";
import { SigninButton } from "@components/button/Button"

const Container = styled.div`
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    font-weight: 400;
    font-size: 2.5vh;
    height: 10vh;
`;

const NavBox = styled.div`
    display: flex;
    align-items: center;
    width: 35%;
    gap: 1vw;
    `;

const WillBeLinx = styled.div`
    width: 7vw;
`;

const Header = () => {
    return (
        <Container>
            <Logo></Logo>
            <NavBox>
                <WillBeLinx>HOME</WillBeLinx>
                <WillBeLinx>ABOUT</WillBeLinx>
                <WillBeLinx>BROWSE</WillBeLinx>
                <WillBeLinx>SEARCH</WillBeLinx>
                <WillBeLinx>FAQ</WillBeLinx>
                <SigninButton>SIGN IN</SigninButton>
            </NavBox>
        </Container>
    )
}

export default Header