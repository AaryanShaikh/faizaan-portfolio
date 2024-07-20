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

const Transformations = () => {
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
    <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 56, lineHeight: "84px", color: colors.primaryColor }}>Transformations</span>
        <div style={{ display: "flex" }}>
          <div style={{ height: 500, width: 500 }}>
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
          <div style={{ height: 500, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: 404, width: 440, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ height: 60, width: 100, borderRadius: "50%", display: "flex", justifyContent: 'center', alignItems: "center", background: "#2424241A" }}>
                  <Image src={fitness_mastery} style={{ height: "85%", width: "85%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ color: colors.textColor, fontFamily: "Poppins", fontWeight: "600", fontSize: "24px", lineHeight: "30.74px" }}>Fitness Mastery</div>
                  <div style={{ color: "#24242499", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "20.5px" }}>
                    Empowering you every step of the way, ensuring you conquer your goals
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ height: 60, width: 100, borderRadius: "50%", display: "flex", justifyContent: 'center', alignItems: "center", background: "#2424241A" }}>
                  <Image src={various_workout_icon} style={{ height: "85%", width: "85%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ color: colors.textColor, fontFamily: "Poppins", fontWeight: "600", fontSize: "24px", lineHeight: "30.74px" }}>Various workout options</div>
                  <div style={{ color: "#24242499", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "20.5px" }}>
                    Empowering you every step of the way, ensuring you conquer your goals
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ height: 60, width: 100, borderRadius: "50%", display: "flex", justifyContent: 'center', alignItems: "center", background: "#2424241A" }}>
                  <Image src={expert_nutrition_icon} style={{ height: "85%", width: "85%", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ color: colors.textColor, fontFamily: "Poppins", fontWeight: "600", fontSize: "24px", lineHeight: "30.74px" }}>Expert Nutrition Guidance</div>
                  <div style={{ color: "#24242499", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px", lineHeight: "20.5px" }}>
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