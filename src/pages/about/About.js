import React from "react"
import { styled } from "styled-components"
import { ReturnButton } from "@components/button/Button";
import { NavLink } from "react-router-dom";

const AboutContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
`;

const About = () => {
    return (
        <AboutContent>
            <h1>About content will go here.</h1>
            <ReturnButton><NavLink to="/">RETURN HOME</NavLink></ReturnButton>
        </AboutContent>
    )
}

export default About
