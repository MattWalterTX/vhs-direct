import React from "react";
import Logo from "@components/logo/Logo"
import homeIcon from "@assets/test-icons/homeIcon.svg"
import vhsIcon from "@assets/test-icons/vhsIcon.svg"
import searchIcon from "@assets/test-icons/searchIcon.svg"
import faqIcon from "@assets/test-icons/faqIcon.svg"
import aboutIcon from "@assets/test-icons/aboutIcon.svg"
import { Container,
        NavBox,
        NavList,
        NavItem,
        Icon
    } from "@components/footer/Footer.styled"

const Footer = () => {
    return (
        <Container>
            <NavBox>
                <h2>SITEMAP</h2>
                <NavList>
                    <NavItem>
                        <Icon alt="home icon" src={homeIcon} />
                        <p>HOME</p>
                    </NavItem>
                    <NavItem>
                        <Icon alt="about icon" src={aboutIcon} />
                        <p>ABOUT</p>
                    </NavItem>
                    <NavItem>
                        <Icon alt="vhs icon" src={vhsIcon} />
                        <p>BROWSE</p>
                    </NavItem>
                    <NavItem>
                        <Icon alt="search icon" src={searchIcon} />
                        <p>SEARCH</p>
                    </NavItem>
                    <NavItem>
                        <Icon alt="faq icon" src={faqIcon} />
                        <p>FAQ</p>
                    </NavItem>
                </NavList>
            </NavBox>
            <Logo/>
        </Container>
    )
}

export default Footer
