import React from "react";
import styled from "styled-components";
import vhsIcon from "@assets/test-icons/vhsIcon.svg"

const Container = styled.div`
    display: flex;
    align-items: center;
    /* width: 5vw; */
    padding: 2vw;
    justify-content: flex-start;

`;

const Icon = styled.img`
    height: 4vh;
    align-self: center;
    justify-self: center;
`;


const Logo = () => {
    return (
        <Container>
            <Icon alt="vhs logo icon" src={vhsIcon} />
        </Container>
    )
}

export default Logo