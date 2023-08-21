import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo"

const Container = styled.div`
    align-items: flex-start;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    margin: 3.5em;
`;

const NavBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const NavItems = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Footer = () => {
    return (
        <Container>
            <NavBox>
                <h2>SITEMAP</h2>
                <NavItems>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>BROWSE</p>
                    <p>SEARCH</p>
                    <p>FAQ</p>
                </NavItems>
            </NavBox>
            <Logo/>
        </Container>
    )
}

export default Footer
