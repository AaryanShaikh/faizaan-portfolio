import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/logo.svg'
import instagram from '../assets/images/instagram_icon.svg'
import facebook from '../assets/images/facebook_icon.svg'

const Footer = () => {
    return (
        <div style={{ height: "300px", background: "#D92C24" }}>
            <div style={{ height: "80%", display: "flex", justifyContent: "center", flexDirection: "column", gap: 30 }}>
                <div style={{ height: "22px" }}>
                    <Image src={logo} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ display: "flex", gap: 40, justifyContent: "center", fontFamily: "Poppins", fontWeight: 400, fontSize: "14px", lineHeight: "16.41px", color: "#fff" }}>
                    <span style={{ cursor: "pointer" }}>Home</span>
                    <span style={{ cursor: "pointer" }}>About</span>
                    <span style={{ cursor: "pointer" }}>Services</span>
                    <span style={{ cursor: "pointer" }}>Gallery</span>
                    <span style={{ cursor: "pointer" }}>Contact</span>
                </div>
            </div>
            <div style={{ height: "20%", display: "flex" }}>
                <div style={{ borderRadius: "0px 100px 0px 0px", background: "#A1211B", height: "100%", width: "40%" }}></div>
                <div style={{ height: "100%", width: "20%", display: "flex", justifyContent: 'center', alignItems: "center", gap: "10px" }}>
                    <div style={{ height: "24px", width: "24px" }}>
                        <Image src={facebook} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ height: "24px", width: "24px" }}>
                        <Image src={instagram} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                    </div>
                </div>
                <div style={{ borderRadius: "100px 0px 0px 0px", background: "#A1211B", height: "100%", width: "40%" }}></div>
            </div>
        </div>
    )
}

export default Footer