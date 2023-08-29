import styled from "styled-components";
import bg1 from "@assets/bg-skull1.webp";
import bg2 from "@assets/bg-tv1.webp";

export const MainBlock = styled.div`
    background-size: cover;
    font-size: 1.25em;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const BG1 = styled.div`
    align-content: center;
    background-image: url(${bg1});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    
    display: flex;
    justify-content: center;
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
    margin-bottom: 0rem;
    font-size: 2.5rem;
    `;

export const Title = styled.p`
        font-weight: 600;
        margin-bottom: 0rem;
        font-size: 4rem;
    `;

export const EmailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmailInput = styled.input`
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    height: 3vh;
    margin-left: 2vw;
    width: 35vw;
`;

export const Block4 = styled(ContentBox)`
    text-align: center;
`;

export const Block2 = styled(MainBlock)`
    align-content: center;
    background-color: #180511;
    height: 100vh;
    text-align: start;
    width: 100vw;

    display: flex;
    justify-content: center;
`;

export const Block3 = styled(Block2)`
    background-color: #0e051d;
`;

export const ImgBox = styled.div`
    /* padding: 5rem; */

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
    height: 50vh;
`;
