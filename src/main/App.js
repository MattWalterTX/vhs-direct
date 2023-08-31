import { Routes, Route } from "react-router-dom"
import { styled } from "styled-components"
import Home from "@pages/home/Home"
import About from "@pages/about/About"
import Browse from "@pages/browse/Browse"
import BadURL from "@pages/404/BadURL"
import Search from "@pages/search/Search"
import FAQ from "@pages/faq/FAQ"
import Header from "@components/header/Header"
import Footer from "@components/footer/Footer"

const AppWrapper = styled.div`
    color: white;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;
    background: radial-gradient(red 45%, #340935, #11020e);
`

function App() {
    return (
        <AppWrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/search" element={<Search />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="/*" element={<BadURL />} />
            </Routes>
            <Footer />
        </AppWrapper>
    )
}

export default App
