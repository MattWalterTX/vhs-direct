import styled from "styled-components";
import bg1 from "@assets/bg-skull1.webp";
import bg2 from "@assets/bg-tv1.webp";

export const MainBlock = styled.div`
    background-size: cover;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    font-size: 1.125em;
`;

export const BG1 = styled.div`
    align-content: center;
    background-image: url(${bg1});
    background-size: cover;
    background-position: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

export const BG2 = styled(BG1)`
    background-image: url(${bg2});
`;

export const ContentBox = styled(MainBlock)`
    align-content: center;
    display: flex;
    justify-content: center;
`;

export const Block1 = styled(ContentBox)`
    align-items: flex-start;
`;

export const EmailInput = styled.input`
    font-family: 'Russo One', sans-serif;
    font-size: 3vh;
    height: 5vh;
    margin-left: 2vw;
    width: 35vw;
`;

export const Block4 = styled(ContentBox)`
    text-align: center;
`;

export const Block2 = styled(MainBlock)`
    align-content: center;
    background-color: #180511;
    border: 1px solid blue;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-align: start;
    width: 100vw;
`;

export const Block3 = styled(Block2)`
    background-color: #0e051d;
`;

export const ImgBox = styled.div`
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
`;

export const TextBox = styled.div`
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const VHSImg = styled.img`
    height: 60vh;
`;
