"use client";

import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/logo.svg'
import { colors } from '@/constants'
import { useRouter } from 'next/navigation';

const Navbar = ({ isSel }) => {
    const router = useRouter();
    return (
        <div style={{ height: "93px", background: "radial-gradient(50% 88.89% at 50% 50%, rgba(17, 17, 17, 0.6) 0%, #111111 100%)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", position: "fixed", width: "100%", zIndex: 9, top: 0 }}>
            <div style={{ height: 22, width: 118 }}>
                <Image
                    src={logo}
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
            </div>
            <div style={{ display: "flex", gap: 80 }}>
                <a href='/' style={{ color: isSel == "home" ? colors.primaryColor : "#fff", textDecoration: "none" }}>Home</a>
                <a href='/about' style={{ color: isSel == "about" ? colors.primaryColor : "#fff", textDecoration: "none" }}>About</a>
                <a href='/services' style={{ color: isSel == "services" ? colors.primaryColor : "#fff", textDecoration: "none" }}>Services</a>
                <a href='/gallery' style={{ color: isSel == "gallery" ? colors.primaryColor : "#fff", textDecoration: "none" }}>Gallery</a>
                <a href='/contact' style={{ color: isSel == "contact" ? colors.primaryColor : "#fff", textDecoration: "none" }}>Contact</a>
            </div>
            <div>
                <div onClick={() => { router.push('/'); }} style={{ width: 235, height: 55, background: colors.primaryColor, color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                    GET IN TOUCH
                </div>
            </div>
        </div>
    )
}

export default Navbar