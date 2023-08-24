import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    width: 20%;
    padding: 5vh;
`;

export const NavBox = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 5vh;
`;

export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
`;

export const NavItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
`;

export const Icon = styled.img`
    height: 3vh;
    padding-top: 2vh;
    width: 3vw;
`;