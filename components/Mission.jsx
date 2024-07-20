"use client";
import Image from 'next/image'
import React from 'react'
import mission from '../assets/images/mission.png'
import { colors } from '@/constants'
import { useDeviceType } from '@/hooks'

const Mission = () => {
    const deviceType = useDeviceType();

    return (
        <>
            {
                deviceType == "mobile" ?
                    <div style={{ width: "100%", height: "570px", display: "flex", flexDirection: "column" }}>
                        <div style={{ width: "100%", background: "radial-gradient(50% 88.89% at 50% 50%, rgba(17, 17, 17, 0.6) 0%, #111111 100%)", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", padding: 50, gap: 34 }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "24px", lineHeight: "36px", color: "#fff" }}>Mission &<br /><span style={{ color: colors.primaryColor }}>Vision Statement</span></div>
                            <div style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "16px", lineHeight: "24px", color: "#fff" }}>
                                Hi, I am Faizaan Xec from Goa, India, an engineer turned fitness professional. I am a certified sports nutritionist and a Level 3 personal trainer (K11, INFS, IFSI). I aim to bring back hardcore training by cutting through the trends of modern gyms with fancy lighting that look like cafes. We focus on real, effective training and reject trendy but ineffective methods. Our goal is to create a gym culture where people train with purpose, push their limits, and embrace the true spirit of physical transformation.
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "100%" }}>
                            <Image src={mission} style={{ height: "100%", width: "100%", objectFit: "cover", transform: "scale(1)" }} />
                        </div>
                    </div> : <div style={{ width: "100%", height: "570px", display: "flex", marginTop: 50 }}>
                        <div style={{ border: "1px solid", width: "40%", height: "100%" }}>
                            <Image src={mission} style={{ height: "100%", width: "100%", objectFit: "cover", transform: "scale(1)" }} />
                        </div>
                        <div style={{ width: "60%", background: "radial-gradient(50% 88.89% at 50% 50%, rgba(17, 17, 17, 0.6) 0%, #111111 100%)", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", padding: 50, gap: 34 }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "56px", lineHeight: "84px", color: "#fff" }}>Mission &<br /><span style={{ color: colors.primaryColor }}>Vision Statement</span></div>
                            <div style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 21, lineHeight: "31.5px", color: "#fff" }}>
                                Hi, I am Faizaan Xec from Goa, India, an engineer turned fitness professional. I am a certified sports nutritionist and a Level 3 personal trainer (K11, INFS, IFSI). I aim to bring back hardcore training by cutting through the trends of modern gyms with fancy lighting that look like cafes. We focus on real, effective training and reject trendy but ineffective methods. Our goal is to create a gym culture where people train with purpose, push their limits, and embrace the true spirit of physical transformation.
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Mission