import Image from 'next/image'
import React from 'react'
import heroBg from '../assets/images/hero_banner_background.svg'
import hero from '../assets/images/hero.svg'
import heroText1 from '../assets/images/hero_text1.svg'
import heroText2 from '../assets/images/hero_text2.svg'
import instagram from '../assets/images/instagram_icon.svg'
import facebook from '../assets/images/facebook_icon.svg'

const Hero = () => {
    return (
        <div style={{ height: "70vh", width: "100%", position: "relative", display: "flex", justifyContent: "center", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)" }}>
            <div style={{ position: "absolute", right: "20vh", top: "5vh", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                <div style={{ width: 2, height: "40px", border: "1px solid #fff" }}></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 21 }}>
                    <Image src={instagram} style={{ height: "50px", width: "50px" }} />
                    <Image src={facebook} style={{ height: "50px", width: "50px" }} />
                </div>
                <div style={{ width: 2, height: "40px", border: "1px solid #fff" }}></div>
            </div>
            <Image src={heroBg} style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute" }} />
            <div style={{ height: "68vh", position: "absolute", marginTop: 50, zIndex: 1 }}>
                <Image src={hero} style={{ height: "100%", width: "auto" }} />
            </div>
            <div style={{ zIndex: 0, position: "absolute", height: 229, width: 443, left: "35vh", top: "13vh" }}>
                <Image src={heroText1} style={{ height: "100%", width: "auto", objectFit: "cover" }} />
            </div>
            <div style={{ zIndex: 2, position: "absolute", height: 147, width: 500, bottom: "11vh", right: "31vh" }}>
                <Image src={heroText2} style={{ height: "100%", width: "auto", objectFit: "fill" }} />
            </div>
        </div>
    )
}

export default Hero