import React from "react";
import Logo from "@components/logo/Logo"
import homeIcon from "@assets/test-icons/homeIcon.svg"
import vhsIcon from "@assets/test-icons/vhsIcon.svg"
import searchIcon from "@assets/test-icons/searchIcon.svg"
import faqIcon from "@assets/test-icons/faqIcon.svg"
import aboutIcon from "@assets/test-icons/aboutIcon.svg"
import { Container,
        NavBox,
        NavItem,
        NavTitle,
        NavText,
        Icon
    } from "@components/footer/Footer.styled"

const Footer = () => {
    return (
        <Container>
            <NavBox>
                <NavTitle>SITEMAP</NavTitle>
                <div>
                    <NavItem>
                        <Icon alt="home icon" src={homeIcon} />
                        <NavText>HOME</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon alt="about icon" src={aboutIcon} />
                        <NavText>ABOUT</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon alt="vhs icon" src={vhsIcon} />
                        <NavText>BROWSE</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon alt="search icon" src={searchIcon} />
                        <NavText>SEARCH</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon alt="faq icon" src={faqIcon} />
                        <NavText>FAQ</NavText>
                    </NavItem>
                </div>
            </NavBox>
            <Logo/>
        </Container>
    )
}

export default Footer
