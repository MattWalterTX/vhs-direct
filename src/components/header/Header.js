import React from "react";
import { NavLink } from "react-router-dom";
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

const NavItem = styled(NavLink)`
    color: white;
`;

const Header = () => {
    return (
        <Container>
            <Logo></Logo>
            <NavBox>
                <NavItem to="/">HOME</NavItem>
                <NavItem to="/about">ABOUT</NavItem>
                <NavItem to="/browse">BROWSE</NavItem>
                <NavItem to="/search">SEARCH</NavItem>
                <NavItem to="/faq">FAQ</NavItem>
                <SigninButton>SIGN IN</SigninButton>
            </NavBox>
        </Container>
    )
}

export default Header