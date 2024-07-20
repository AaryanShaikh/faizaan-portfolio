"use client";
import React from 'react'
import card1 from '../assets/images/card1.svg'
import card2 from '../assets/images/card2.svg'
import card3 from '../assets/images/card3.svg'
import Image from 'next/image'
import { useDeviceType } from '@/hooks'
import mobcard1 from "../assets/images/card11.svg"
import mobcard2 from "../assets/images/card12.svg"
import mobcard3 from "../assets/images/card13.svg"

const Services = () => {
    const deviceType = useDeviceType();

    return (
        <>
            {
                deviceType == "mobile" ?
                    <div style={{ height: "951", width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', background: "linear-gradient(0deg, #1E1E1E, #1E1E1E),radial-gradient(9.73% 31.65% at 92.26% 50%, rgba(204, 204, 204, 0.2) 0%, rgba(123, 123, 123, 0) 100%),radial-gradient(11.32% 29.68% at 10.24% 50%, rgba(188, 188, 188, 0.2) 0%, rgba(188, 188, 188, 0) 100%)" }}>
                        <div style={{ width: "80%" }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "24px", lineHeight: "36px", color: "#FF3340", marginTop: "43px" }}>SERVICES</div>
                            <div style={{ display: "flex", marginTop: "35px", paddingBottom: 50, justifyContent: "center", alignItems: "center", flexDirection: "column",gap:40 }}>
                                <div style={{ height: 348, width: "100%", position: "relative" }}>
                                    <Image src={mobcard1} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ height: 348 }}>
                                    <Image src={mobcard2} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ height: 348, position: "relative" }}>
                                    <Image src={mobcard3} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                            </div>
                        </div>
                    </div> : <div style={{ height: "951", width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', background: "linear-gradient(0deg, #1E1E1E, #1E1E1E),radial-gradient(9.73% 31.65% at 92.26% 50%, rgba(204, 204, 204, 0.2) 0%, rgba(123, 123, 123, 0) 100%),radial-gradient(11.32% 29.68% at 10.24% 50%, rgba(188, 188, 188, 0.2) 0%, rgba(188, 188, 188, 0) 100%)" }}>
                        <div style={{ width: "90%" }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "56px", lineHeight: "84px", color: "#FF3340", marginTop: "70px" }}>SERVICES</div>
                            <div style={{ display: "flex", marginTop: "35px", paddingBottom: 50, justifyContent: "center", alignItems: "center" }}>
                                <div style={{ height: 538, left: 40, position: "relative" }}>
                                    <Image src={card1} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ height: 600 }}>
                                    <Image src={card2} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                                <div style={{ height: 538, right: 40, position: "relative" }}>
                                    <Image src={card3} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Services