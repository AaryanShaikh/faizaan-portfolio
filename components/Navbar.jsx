"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { colors } from '@/constants'
import { useRouter } from 'next/navigation';
import { useDeviceType } from '@/hooks';
import ham from '../assets/images/ham_open.svg'
import hamCancel from '../assets/images/ham_cancel.svg'
import instagram from '../assets/images/instagram_icon.svg'
import facebook from '../assets/images/facebook_icon.svg'

const Navbar = ({ isSel }) => {
    const router = useRouter();
    const deviceType = useDeviceType();
    const [isHamActive, setisHamActive] = useState(false)

    console.log("deviceType", deviceType);

    return (
        <div style={{ height: "93px", background: "radial-gradient(50% 88.89% at 50% 50%, rgba(17, 17, 17, 0.6) 0%, #111111 100%)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", position: "fixed", width: "100%", zIndex: 9, top: 0 }}>
            <div style={{ height: 22, width: 118 }}>
                <Image
                    src={logo}
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
            </div>
            <div style={{ position: "absolute", height: "100vh", width: isHamActive ? "100vw" : "0vw", top: 0, right: 0, background: colors.primaryColor, transition: ".5s ease-in-out", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {
                    isHamActive ?
                        <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", gap: 25 }}>
                            <a href='/' style={{ textDecoration: "none", color: "#fff", fontSize: "2rem" }}>Home</a>
                            <div style={{ width: "50%", border: ".3px solid #fff" }}></div>
                            <a href='/about' style={{ textDecoration: "none", color: "#fff", fontSize: "2rem" }}>About</a>
                            <div style={{ width: "50%", border: ".3px solid #fff" }}></div>
                            <a href='/services' style={{ textDecoration: "none", color: "#fff", fontSize: "2rem" }}>Services</a>
                            <div style={{ width: "50%", border: ".3px solid #fff" }}></div>
                            <a href='/gallery' style={{ textDecoration: "none", color: "#fff", fontSize: "2rem" }}>Gallery</a>
                            <div style={{ width: "50%", border: ".3px solid #fff" }}></div>
                            <a href='/' style={{ textDecoration: "none", color: "#fff", fontSize: "2rem" }}>Contact</a>
                            <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                <div style={{ height: 33, width: 33 }}>
                                    <Image src={instagram} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ height: 33, width: 33 }}>
                                    <Image src={facebook} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                            </div>
                        </div> : ""
                }
                {
                    isHamActive ?
                        <div onClick={() => { setisHamActive(false) }} style={{ height: 30, width: 30, position: "absolute", top: "5%", right: "9%" }}>
                            <Image src={hamCancel} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                        </div> : ""
                }
            </div>
            {
                deviceType == "mobile" ? <div onClick={() => { setisHamActive(true) }} style={{ height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={ham} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </div> :
                    <>
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
                    </>
            }
        </div>
    )
}

export default Navbar