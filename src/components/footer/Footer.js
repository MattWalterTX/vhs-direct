import React from "react";
import styled from "styled-components";
import Logo from "@components/logo/Logo"

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    width: 30%;
    padding: 5vh;
`;

const NavBox = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 5vh;
`;

const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1vw;
    text-align: start;
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
