import React from 'react'
import { Contact, Footer, Hero, Mission, Navbar, Transformations } from '.'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    return (
        <div>
            <Navbar isSel={"home"} />
            <div style={{ marginTop: "93px" }}>
                <Hero />
                <Transformations />
                <Mission />
                <Contact />
                <Footer />
            </div>

        </div>
    )
}

export default Main