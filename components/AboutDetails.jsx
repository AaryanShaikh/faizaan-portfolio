"use client";
import React from 'react'
import about from '../assets/images/about.svg'
import aboutDumbell from '../assets/images/about_dumbell.svg'
import Image from 'next/image'
import { useDeviceType } from '@/hooks'

const AboutDetails = () => {
    const deviceType = useDeviceType();

    return (
        <>
            {
                deviceType == "mobile" ?
                    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <div style={{ width: "80%" }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "24px", lineHeight: "36px", color: "#FF3340", marginTop: "42px" }}>ABOUT</div>
                            <div style={{ display: "flex", gap: 40, position: "relative", flexDirection: "column" }}>
                                <div style={{ height: "392px", width: "100%", position: "relative", zIndex: 2, marginTop: "19px" }}>
                                    <Image src={about} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ width: "100%", fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "27.04px", display: "flex", alignItems: "center", position: "relative", zIndex: 2, paddingBottom: "50px", color: "#242424BF", position: "relative" }}>
                                    <span>
                                        Hi, I am Faizaan Xec from Goa, India. As an engineer turned fitness professional, I bring a unique perspective to the world of fitness. I studied Automobile Engineering and later attended K11 Fitness Academy to pursue my passion for fitness. Now, I work as a Strength and Hypertrophy Coach. I am also a certified sports nutritionist and a Level 3 personal trainer with certifications from K11, INFS, and IFSI.<br/>
                                        My mission is to revive the essence of hardcore training, cutting through the trends of modern gyms with fancy lighting and café-like environments. I focus on real, effective training, rejecting trendy but ineffective methods. My goal is to create a culture where people train with purpose, push their limits, and embrace the true spirit of physical transformation. Join me in this journey to experience authentic and impactful fitness training
                                    </span>
                                    <div style={{ position: "absolute", height: "100%", width: "100%", zIndex: 1, opacity: 0.2,top:"-30%" }}>
                                        <Image src={aboutDumbell} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div style={{ height: "937px", width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: "90%" }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "56px", lineHeight: "84px", color: "#FF3340" }}>ABOUT</div>
                            <div style={{ display: "flex", gap: 70, marginTop: "35px", position: "relative" }}>
                                <div style={{ position: "absolute", height: "865px", width: "865px", zIndex: 1, opacity: 0.2, top: "-15vh", left: "25vh" }}>
                                    <Image src={aboutDumbell} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ height: "615px", width: "500px", position: "relative", zIndex: 2 }}>
                                    <Image src={about} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ width: "55%", fontFamily: "Poppins", fontWeight: 400, fontSize: "3vh", lineHeight: "40.56px", height: "615px", display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}>
                                    Hi, I am Faizaan Xec from Goa, India. As an engineer turned fitness professional, I bring a unique perspective to the world of fitness. I studied Automobile Engineering and later attended K11 Fitness Academy to pursue my passion for fitness. Now, I work as a Strength and Hypertrophy Coach. I am also a certified sports nutritionist and a Level 3 personal trainer with certifications from K11, INFS, and IFSI.
                                    My mission is to revive the essence of hardcore training, cutting through the trends of modern gyms with fancy lighting and café-like environments. I focus on real, effective training, rejecting trendy but ineffective methods. My goal is to create a culture where people train with purpose, push their limits, and embrace the true spirit of physical transformation. Join me in this journey to experience authentic and impactful fitness training
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default AboutDetails