import { Routes, Route } from "react-router-dom"
import { styled } from "styled-components"

import Home from "../pages/home/Home"
import Footer from "@components/footer/Footer"
import About from "@pages/about/About"
import BadURL from "@pages/404/BadURL"

const AppWrapper = styled.div`
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    font-family: "Russo One", sans-serif;
    text-align: center;
    background: radial-gradient(red 45%, #340935, #11020e);
`

function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/*" element={<BadURL />} />
            </Routes>
            <Footer />
        </AppWrapper>
    )
}

export default App
