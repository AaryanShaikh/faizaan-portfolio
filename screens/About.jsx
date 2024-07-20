"use client";
import { AboutDetails, Footer, Navbar } from '@/components'
import React from 'react'

const About = () => {
    return (
        <div>
            <Navbar isSel={"about"} />
            <div style={{ marginTop: "93px" }}>
                <AboutDetails />
                <Footer />
            </div>
        </div>
    )
}

export default About