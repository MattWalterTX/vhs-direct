import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo";
import { SigninButton } from "@components/button/Button"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 2vw;
    position: absolute;
    width: 95%;
`;

const NavBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 1vh;
    width: 50%;
`;

const WillBeLinx = styled.p`
    font-size: 2rem;
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