import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid red;
    display: flex;
`;

const Icon = styled.img`

`;

const Text = styled.p`
    font-size: x-large;
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