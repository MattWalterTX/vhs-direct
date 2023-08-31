import React from "react";
import { styled } from "styled-components"
import { ReturnButton } from "@components/button/Button";
import { NavLink } from "react-router-dom";

const BrowseContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
`;

const Browse = () => {
    return (
        <BrowseContent>
            <h1>Category Browsing content will go here.</h1>
            <ReturnButton><NavLink to="/">RETURN HOME</NavLink></ReturnButton>
        </BrowseContent>
    )
}

export default Browse
