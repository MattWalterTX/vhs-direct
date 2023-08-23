import React from "react";
import { MainBlock,
        Block1,
        Block2,
        Block3,
        Block4,
        ImgBox,
        VHSImg,
        TextBox,
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
                    <h3>SKIP THE WAIT</h3>
                    <p>
                        GET VHS CASSETTES STREAMED DIRECTLY TO YOUR PREFRONTAL
                        CORTEX.
                    </p>
                    <div>
                        <HeroButton>PLEDGE FEALTY</HeroButton>
                        <EmailInput
                            type="email"
                            name="email"
                            placeholder="EMAIL ADDRESS"
                        />
                    </div>
                </Block1>
            </BG1>
            <Block2>
                <ImgBox>
                    <TextBox>
                        <h3>THE BEST ESCAPISM MONEY CAN BUY</h3>
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
                        <h3>EMBRACE THE SPOOK</h3>
                        <p>
                            UNLEASH THE HALLOWEEN SPIRIT UPON YOUR UNSUSPECTING
                            PEERS EVERY DAY OF THE YEAR.
                        </p>
                    </TextBox>
                </ImgBox>
            </Block3>
            <BG2>
                <Block4>
                    <h3>NOT READY TO SEAL YOUR FATE?</h3>
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