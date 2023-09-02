import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    text-align: start;
    width: 20%;
    padding: 5vh;
    display: flex;
    flex-direction: column;
`;

export const NavBox = styled.div`
    padding-bottom: 5vh;
`;

export const NavItem = styled.div`
    display: flex;
    justify-content: flex-start;
    &:hover {
        background-color: rgb(221, 66, 245);
        color: black;
        border: 0.5px solid white;
        cursor: pointer;
    }
`;

export const NavTitle = styled.p`
    font-weight: 600;
    font-size: 3rem;
    align-content: center;
    text-shadow: 2px 2px 8px black;
`;

export const NavText = styled(NavTitle)`
    font-size: 1.5rem;
`;

export const Icon = styled.img`
    height: 3vh;
    padding: 1.75rem;
    width: 3vw;
`;