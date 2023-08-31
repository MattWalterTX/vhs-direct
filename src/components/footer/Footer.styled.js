import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export const NavItem = styled(NavLink)`
    display: flex;
    color: white;
    justify-content: flex-start;
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