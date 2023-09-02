import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo";
import { SigninButton } from "@components/button/Button"

const Container = styled.div`
    background-color: black;
    position: absolute;
    font-weight: 400;
    font-size: 1.5rem;
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1vw;
    `;

const WillBeLinx = styled.div`
    &:hover {
        color: black;
        background-color: rgb(229, 160, 250);
        cursor: pointer;
    }
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