"use client";
import { Services, Footer, Navbar } from '@/components'
import React from 'react'

const ServicesPage = () => {
    return (
        <div>
            <Navbar isSel={"services"} />
            <div style={{ marginTop: "93px" }}>
                <Services />
                <Footer />
            </div>
        </div>
    )
}

export default ServicesPage