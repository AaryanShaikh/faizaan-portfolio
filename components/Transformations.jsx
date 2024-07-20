"use client";
import { colors } from '@/constants'
import React from 'react'
import Slider from "react-slick";
import trans1 from '../assets/images/transform_1.JPG'
import trans2 from '../assets/images/transform_2.JPG'
import trans3 from '../assets/images/transform_3.JPG'
import trans4 from '../assets/images/transform_4.JPG'
import fitness_mastery from '../assets/images/fitness_mastery.svg'
import expert_nutrition_icon from '../assets/images/expert_nutrition_icon.svg'
import various_workout_icon from '../assets/images/various_workout_icon.svg'
import Image from 'next/image';
import { useDeviceType } from '@/hooks';

const Transformations = () => {
  const deviceType = useDeviceType();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", marginTop: deviceType == "mobile" ? "100px" : "0px" }}>
      <div style={{ width: "80%" }}>
        <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: deviceType == "mobile" ? "24px" : 56, lineHeight: deviceType == "mobile" ? "36px" : "84px", color: colors.primaryColor }}>Transformations</span>
        <div style={{ display: "flex", flexDirection: deviceType == "mobile" ? "column" : "row", marginTop: deviceType == "mobile" ? "21px" : "0px" }}>
          <div style={{ height: deviceType == "mobile" ? 300 : 500, width: deviceType == "mobile" ? 300 : 500 }}>
            <Slider {...settings}>
              <div>
                <Image src={trans1} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <Image src={trans2} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <Image src={trans3} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <Image src={trans4} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
              </div>
            </Slider>
          </div>
          <div style={{ height: deviceType == "mobile" ? "390px" : 500, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: deviceType == "mobile" ? "250px" : 404, width: 440, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ height: deviceType == "mobile" ? "44px" : 60, width: deviceType == "mobile" ? "84px" : 100, borderRadius: "50%", display: "flex", justifyContent: 'center', alignItems: "center", background: "#2424241A" }}>
                  <Image src={fitness_mastery} style={{ height: deviceType == "mobile" ? "70%" : "85%", width: deviceType == "mobile" ? "100%" : "85%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ color: colors.textColor, fontFamily: "Poppins", fontWeight: "600", fontSize: deviceType == "mobile" ? "17px" : "24px", lineHeight: deviceType == "mobile" ? "22px" : "30.74px" }}>Fitness Mastery</div>
                  <div style={{ color: "#24242499", fontFamily: "Poppins", fontWeight: "400", fontSize: deviceType == "mobile" ? "11px" : "16px", lineHeight: deviceType == "mobile" ? "16px" : "20.5px" }}>
                    Empowering you every step of the way, ensuring you conquer your goals
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ height: deviceType == "mobile" ? "44px" : 60, width: deviceType == "mobile" ? "84px" : 100, borderRadius: "50%", display: "flex", justifyContent: 'center', alignItems: "center", background: "#2424241A" }}>
                  <Image src={various_workout_icon} style={{ height: deviceType == "mobile" ? "70%" : "85%", width: deviceType == "mobile" ? "100%" : "85%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ color: colors.textColor, fontFamily: "Poppins", fontWeight: "600", fontSize: deviceType == "mobile" ? "17px" : "24px", lineHeight: deviceType == "mobile" ? "22px" : "30.74px" }}>Various workout options</div>
                  <div style={{ color: "#24242499", fontFamily: "Poppins", fontWeight: "400", fontSize: deviceType == "mobile" ? "11px" : "16px", lineHeight: deviceType == "mobile" ? "16px" : "20.5px" }}>
                    Empowering you every step of the way, ensuring you conquer your goals
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ height: deviceType == "mobile" ? "44px" : 60, width: deviceType == "mobile" ? "84px" : 100, borderRadius: "50%", display: "flex", justifyContent: 'center', alignItems: "center", background: "#2424241A" }}>
                  <Image src={expert_nutrition_icon} style={{ height: deviceType == "mobile" ? "70%" : "85%", width: deviceType == "mobile" ? "100%" : "85%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ color: colors.textColor, fontFamily: "Poppins", fontWeight: "600", fontSize: deviceType == "mobile" ? "17px" : "24px", lineHeight: deviceType == "mobile" ? "22px" : "30.74px" }}>Expert Nutrition Guidance</div>
                  <div style={{ color: "#24242499", fontFamily: "Poppins", fontWeight: "400", fontSize: deviceType == "mobile" ? "11px" : "16px", lineHeight: deviceType == "mobile" ? "16px" : "20.5px" }}>
                    As a certified nutritionist, I provide personalized advice to help you achieve optimal health and fitness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transformations