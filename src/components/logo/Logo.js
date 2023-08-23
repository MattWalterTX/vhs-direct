import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
`;

const Icon = styled.img`
    /* needs asset */
`;

const Text = styled.p`
    font-size: 3vh;
`;

const Logo = () => {
    return (
        <Container>
            <Icon></Icon>
            <Text>VHS DIRECT</Text>
        </Container>
    )
}

export default Logo