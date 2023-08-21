import styled from "styled-components";
import bg1 from "@assets/bg-skull1.webp";
import bg2 from "@assets/bg-tv1.webp";

export const Block = styled.div`
    border: 1px solid green;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.6em;
    text-align: start;
`;

export const ContentBox = styled(Block)`
    border: 1px solid green;
    padding: 15em 22.5em;
`;

export const Block1 = styled(ContentBox)`
    align-items: flex-start;
    `;

export const Block4 = styled(ContentBox)`
    text-align: center;
    `;

export const SignUpBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0%;
`;

export const Block2 = styled(Block)`
    background-color: #180511;
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
`;

export const Block3 = styled(Block2)`
    background-color: #0e051d;
`;

export const ImgBox = styled.div`
    border: 1px solid blue;
    display: flex;
    justify-content: space-between;
    margin: 5em;
`;

export const TextBox = styled.div`
    padding-top: 11em;
`;

export const VHSImg = styled.img`
    height: 30em;
`;


export const EmailInput = styled.input`
    font-family: 'Russo One', sans-serif;
    height: 2em;
    margin-left: 2em;
    width: 30em;
`;

export const BG1 = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${bg1});
    background-size: cover;
    background-position: center;
`;

export const BG2 = styled(BG1)`
    background-image: url(${bg2});
`;