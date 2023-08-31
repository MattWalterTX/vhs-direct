import React from "react";
import { styled } from "styled-components"
import { ReturnButton } from "@components/button/Button";
import { NavLink } from "react-router-dom";

const FAQContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
`;

const FAQ = () => {
    return (
        <FAQContent>
            <h1>Frequently Asked Questions will go here.</h1>
            <ReturnButton><NavLink to="/">RETURN HOME</NavLink></ReturnButton>
        </FAQContent>
    )
}

export default FAQ
