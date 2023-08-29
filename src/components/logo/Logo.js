import React from "react";
import styled from "styled-components";
import vhsIcon from "@assets/test-icons/vhsIcon.svg"

const Container = styled.div`
    padding: 2vw;
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