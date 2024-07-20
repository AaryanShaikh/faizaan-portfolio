"use client";
import Image from 'next/image'
import React from 'react'
import heroBg from '../assets/images/hero_banner_background.svg'
import hero from '../assets/images/hero.svg'
import heroText1 from '../assets/images/hero_text1.svg'
import heroText2 from '../assets/images/hero_text2.svg'
import instagram from '../assets/images/instagram_icon.svg'
import facebook from '../assets/images/facebook_icon.svg'
import { useDeviceType } from '@/hooks'

const Hero = () => {
    const deviceType = useDeviceType();

    return (
        <div style={{ height: deviceType == "mobile" ? "480px" : "70vh", width: "100%", position: "relative", display: "flex", justifyContent: "center", clipPath: deviceType == "mobile" ? "" : "polygon(0 0, 100% 0, 100% 100%, 0 95%)" }}>
            <div style={{ position: "absolute", right: deviceType == "mobile" ? "88%" : "20vh", top: deviceType == "mobile" ? "50%" : "5vh", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                <div style={{ width: deviceType == "mobile" ? 1 : 2, height: deviceType == "mobile" ? "20px" : "40px", border: "1px solid #fff" }}></div>
                <div style={{ display: "flex", flexDirection: "column", gap: deviceType == "mobile" ? 11 : 21 }}>
                    <Image src={instagram} style={{ height: deviceType == "mobile" ? "25px" : "50px", width: deviceType == "mobile" ? "25px" : "50px" }} />
                    <Image src={facebook} style={{ height: deviceType == "mobile" ? "25px" : "50px", width: deviceType == "mobile" ? "25px" : "50px" }} />
                </div>
                <div style={{ width: deviceType == "mobile" ? 1 : 2, height: deviceType == "mobile" ? "20px" : "40px", border: "1px solid #fff" }}></div>
            </div>
            <Image src={heroBg} style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute" }} />
            <div style={{ height: deviceType == "mobile" ? "329px" : "68vh", position: "absolute", marginTop: deviceType == "mobile" ? 100 : 50, zIndex: 1 }}>
                <Image src={hero} style={{ height: "100%", width: "auto" }} />
            </div>
            <div style={{ zIndex: 0, position: "absolute", height: deviceType == "mobile" ? 119 : 229, width: deviceType == "mobile" ? 220 : 443, left: deviceType ? "23%" : "35vh", top: deviceType ? "5%" : "13vh" }}>
                <Image src={heroText1} style={{ height: "100%", width: "auto", objectFit: "cover" }} />
            </div>
            {
                deviceType == "mobile" ? <div style={{ height: "131px", background: "linear-gradient(180deg, #E9313D 34.88%, #E3303B 48.32%, #831C22 100%)", zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", position: "relative", top: "88%" }}>
                    <div style={{ height: "87px" }}>
                        <Image src={heroText2} style={{ height: "100%", width: "auto", objectFit: "fill" }} />
                    </div>
                </div> : <div style={{ zIndex: 2, position: "absolute", height: 147, width: 500, bottom: "11vh", right: "31vh" }}>
                    <Image src={heroText2} style={{ height: "100%", width: "auto", objectFit: "fill" }} />
                </div>
            }
        </div>
    )
}

export default Hero