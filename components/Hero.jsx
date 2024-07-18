import Image from 'next/image'
import React from 'react'
import heroBg from '../assets/images/hero_bg.jpg'
import hero from '../assets/images/hero.png'
import heroText1 from '../assets/images/hero_text1.png'
import heroText2 from '../assets/images/hero_text2.png'

const Hero = () => {
    return (
        <div style={{ height: "570px", width: "100%", position: "relative", display: "flex", justifyContent: "center", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)",background:"red" }}>
            <Image src={heroBg} style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute" }} />
            <div style={{ height: 554, width: "auto", position: "absolute", marginTop: 50, zIndex: 1 }}>
                <Image src={hero} style={{ height: "100%", width: "auto" }} />
            </div>
            <div style={{ zIndex: 0, position: "absolute", height: 239, width: 443, left: "47vh", top: "6vh" }}>
                <Image src={heroText1} style={{ height: "100%", width: "auto", objectFit: "cover" }} />
            </div>
            <div style={{ zIndex: 2, position: "absolute", height: 257, width: 405, bottom: 0, right: "45vh" }}>
                <Image src={heroText2} style={{ height: "100%", width: "auto", objectFit: "fill" }} />
            </div>
        </div>
    )
}

export default Hero