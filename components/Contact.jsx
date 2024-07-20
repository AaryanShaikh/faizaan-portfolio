import { colors } from '@/constants'
import React from 'react'
import contact from '../assets/images/contact.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <div style={{ height: 806, position: "relative", background: "rgb(217, 217, 217)" }}>
            <div style={{ height: "100%", position: "absolute",width: "100%", pointerEvents: "none" }}>
                <Image src={contact} style={{ height: "100%", width: "100%", objectFit: "contain", opacity: 0.2 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 30, marginTop: "90px" }}>
                <div style={{ border: "0.5px solid #343434", width: "150px" }}></div>
                <div style={{ color: colors.primaryColor, fontFamily: "Poppins", fontWeight: 700, fontSize: "46px", lineHeight: "69px" }}>CONTACT FOR FREE CONSULTATION</div>
                <div style={{ border: "0.5px solid #343434", width: "150px" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 7, flexDirection: "column", marginTop: "70px" }}>
                <div style={{ width: "45%", display: "flex", flexDirection: "column", gap: 7 }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "24px", lineHeight: "36px", letterSpacing: "-1%", color: "#343434" }}>Full Name</span>
                        <input style={{ background: "#2E353C", opacity: 0.5, height: 36, borderRadius: 6, padding: 10, color: "#fff" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "24px", lineHeight: "36px", letterSpacing: "-1%", color: "#343434" }}>Email</span>
                        <input style={{ background: "#2E353C", opacity: 0.5, height: 36, borderRadius: 6, padding: 10, color: "#fff" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "24px", lineHeight: "36px", letterSpacing: "-1%", color: "#343434" }}>Phone</span>
                        <input style={{ background: "#2E353C", opacity: 0.5, height: 36, borderRadius: 6, padding: 10, color: "#fff" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "24px", lineHeight: "36px", letterSpacing: "-1%", color: "#343434" }}>Message</span>
                        <textarea style={{ background: "#2E353C", opacity: 0.5, height: 150, borderRadius: 6, padding: 10, color: "#fff" }} />
                    </div>
                    <div style={{ width: "173px", height: "44px", padding: "0px 48px 0px 48px", color: "#fff", background: "#ED042E", justifyContent: "center", alignItems: "center", display: "flex", alignSelf: "flex-start", marginTop: 10, cursor: "pointer" }}>
                        <span>Submit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact