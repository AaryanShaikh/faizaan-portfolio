import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/logo.png'
import { colors } from '@/constants'

const Navbar = () => {
    return (
        <div style={{ height: "93px", background: "radial-gradient(50% 88.89% at 50% 50%, rgba(17, 17, 17, 0.6) 0%, #111111 100%)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px" }}>
            <div style={{ height: 22, width: 118 }}>
                <Image
                    src={logo}
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
            </div>
            <div style={{ display: "flex", gap: 80 }}>
                <span style={{ cursor: "pointer", color: colors.primaryColor }}>Home</span>
                <span style={{ cursor: "pointer", color: "#fff" }}>Health & Fitness</span>
                <span style={{ cursor: "pointer", color: "#fff" }}>Contact Us</span>
                <span style={{ cursor: "pointer", color: "#fff" }}>Pricing</span>
            </div>
            <div>
                <div style={{ width: 235, height: 55, background: colors.primaryColor, color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    GET IN TOUCH
                </div>
            </div>
        </div>
    )
}

export default Navbar