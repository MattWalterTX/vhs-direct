import styled from "styled-components";
import bg1 from "@assets/bg-skull1.webp";
import bg2 from "@assets/bg-tv1.webp";

export const MainBlock = styled.div`
    background-size: cover;
    font-size: 1.25em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80vw;
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
    width: 60vw;
    text-shadow: 2px 2px 8px black;
    justify-content: center;
`;

export const Block1 = styled(ContentBox)`
    margin-bottom: 0rem;
    font-size: 2.5rem;
    display: flex;
    align-items: flex-start;
`;

export const HeroTextTop = styled.p`
    margin: 3vh 0vw 5vh 0vw;
    text-align: start;
`;

export const HeroTextBottom = styled.p`
    margin: 2rem
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
    margin: 1rem;
`;

export const EmailInput = styled.input`
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.25rem;
    height: 3vh;
    margin-left: 2vw;
    width: 35vw;
    padding: 0.5rem;
`;

export const Block4 = styled(Block1)`
    text-align: center;
    align-items: center;
    width: 70rem;
    padding-top: 15rem;
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
    display: flex;
    justify-content: space-around;
`;

export const ImgText = styled(HeroTextTop)`
    font-size: 2.5rem;
`;

export const TextBox = styled.div`
    align-content: center;
    text-shadow: 1px 1px 2px black;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const VHSImg = styled.img`
    height: 50vh;
    padding: 10vw;

`;
