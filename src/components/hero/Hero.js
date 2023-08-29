import React from "react";
import { MainBlock,
        Block1,
        Block2,
        Block3,
        Block4,
        Title,
        ImgBox,
        VHSImg,
        TextBox,
        EmailContainer,
        EmailInput,
        BG1,
        BG2 } from "@components/hero/Hero.styled";
import { HeroButton, BrowseButton } from "@components/button/Button";
import vhs1 from "@assets/img-vhs1.jpeg";
import vhs2 from "@assets/img-vhs2.webp";

const Hero = () => {
    return (
        <MainBlock>
            <BG1>
                <Block1>
                    <Title>SKIP THE WAIT</Title>
                    <p>
                        GET VHS CASSETTES STREAMED DIRECTLY TO YOUR PREFRONTAL
                        CORTEX.
                    </p>
                    <EmailContainer>
                        <HeroButton>PLEDGE FEALTY</HeroButton>
                        <EmailInput
                            type="email"
                            name="email"
                            placeholder="EMAIL ADDRESS"
                        />
                    </EmailContainer>
                </Block1>
            </BG1>
            <Block2>
                <ImgBox>
                    <TextBox>
                        <Title>THE BEST ESCAPISM MONEY CAN BUY</Title>
                        <p>
                            GIVE YOUR BRAIN A BREAK FROM WORK. WE'LL TAKE GOOD
                            CARE OF IT WHILE YOU'RE AWAY.
                        </p>
                    </TextBox>
                    <div>
                        <VHSImg
                            src={vhs1}
                            alt="horror cassette 1"
                        />
                    </div>
                </ImgBox>
            </Block2>
            <Block3>
                <ImgBox>
                    <div>
                        <VHSImg
                            src={vhs2}
                            alt="horror cassette 1"
                        />
                    </div>
                    <TextBox>
                        <Title>EMBRACE THE SPOOK</Title>
                        <p>
                            UNLEASH THE HALLOWEEN SPIRIT UPON YOUR UNSUSPECTING
                            PEERS EVERY DAY OF THE YEAR.
                        </p>
                    </TextBox>
                </ImgBox>
            </Block3>
            <BG2>
                <Block4>
                    <Title>NOT READY TO SEAL YOUR FATE?</Title>
                    <p>
                        BROWSE OUT LIBRARY FOR FREE.
                    </p>
                    <BrowseButton>FEAST YOUR EYES</BrowseButton>
                </Block4>
            </BG2>
        </MainBlock>
    )
}

export default Hero