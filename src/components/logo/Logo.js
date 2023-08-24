import React from "react";
import styled from "styled-components";
import vhsIcon from "@assets/test-icons/vhsIcon.svg"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
`;

const Icon = styled.img`
    height: 5vh;
    width: 5vw;
`;

const Text = styled.p`
    font-size: 2rem;
`;

const Logo = () => {
    return (
        <Container>
            <Icon alt="vhs logo icon" src={vhsIcon} />
            <Text>VHS DIRECT</Text>
        </Container>
    )
}

export default Logo