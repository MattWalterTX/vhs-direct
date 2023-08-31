import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components"
import { ReturnButton } from "@components/button/Button";

const SearchContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
`;

const Search = () => {
    return (
        <SearchContent>
            <h1>Filtered Searching content will go here.</h1>
            <ReturnButton><NavLink to="/">RETURN HOME</NavLink></ReturnButton>
        </SearchContent>
    )
}

export default Search
