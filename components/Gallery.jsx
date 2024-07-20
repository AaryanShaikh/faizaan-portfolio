"use client";
import { Image } from 'antd';
import React from 'react'
import { useDeviceType } from '@/hooks';

const Gallery = () => {
    const deviceType = useDeviceType();

    return (
        <>
            {
                deviceType == "mobile" ?
                    <div style={{ height: "951", width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', background: "linear-gradient(0deg, #1E1E1E, #1E1E1E),radial-gradient(9.73% 31.65% at 92.26% 50%, rgba(204, 204, 204, 0.2) 0%, rgba(123, 123, 123, 0) 100%),radial-gradient(11.32% 29.68% at 10.24% 50%, rgba(188, 188, 188, 0.2) 0%, rgba(188, 188, 188, 0) 100%)" }}>
                        <div style={{ width: "90%" }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "24px", lineHeight: "36px", color: "#FF3340", marginTop: "45px" }}>GALLERY</div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(1,auto)", gap: 74, marginTop: "30px", paddingBottom: "50px", justifyItems: "center" }}>
                                <div style={{ height: 260, width: 260 }}>
                                    <Image src="/galleryIMGs/transform_1.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 260, width: 260 }}>
                                    <Image src="/galleryIMGs/transform_2.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 260, width: 260 }}>
                                    <Image src="/galleryIMGs/transform_3.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 260, width: 260 }}>
                                    <Image src="/galleryIMGs/transform_4.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 260, width: 260 }}>
                                    <Image src="/galleryIMGs/transform_5.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>
                    </div> : <div style={{ height: "951", width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', background: "linear-gradient(0deg, #1E1E1E, #1E1E1E),radial-gradient(9.73% 31.65% at 92.26% 50%, rgba(204, 204, 204, 0.2) 0%, rgba(123, 123, 123, 0) 100%),radial-gradient(11.32% 29.68% at 10.24% 50%, rgba(188, 188, 188, 0.2) 0%, rgba(188, 188, 188, 0) 100%)" }}>
                        <div style={{ width: "90%" }}>
                            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "56px", lineHeight: "84px", color: "#FF3340", marginTop: "70px" }}>GALLERY</div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 74, marginTop: "70px", paddingBottom: "50px" }}>
                                <div style={{ height: 400, width: 400 }}>
                                    <Image src="/galleryIMGs/transform_1.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 400, width: 400 }}>
                                    <Image src="/galleryIMGs/transform_2.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 400, width: 400 }}>
                                    <Image src="/galleryIMGs/transform_3.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 400, width: 400 }}>
                                    <Image src="/galleryIMGs/transform_4.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                                <div style={{ height: 400, width: 400 }}>
                                    <Image src="/galleryIMGs/transform_5.JPG" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Gallery