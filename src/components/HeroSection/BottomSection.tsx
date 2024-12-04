"use client";

import React, { FC } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

import BottomSliderItem from "./components/BottomSliderItem";
import styles from "./BottomSection.module.scss";

const BottomSection: FC = () => {
  const services = [
    {
      icon: "/services/icon-marketing.png",
      text: "해외 마케팅",
    },
    {
      icon: "/services/icon-image.png",
      text: "퍼블리셔",
    },
    {
      icon: "/services/icon-box.png",
      text: "캐드원(제도사)",
    },
    {
      icon: "/services/icon-target.png",
      text: "해외 세일즈",
    },
    {
      icon: "/services/icon-call.png",
      text: "해외 CS",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
        ["container"]: true,
        ["mx-auto"]: true,
        ["animate__animated animate__fadeIn"]: true,
      })}
    >
      <div className="sliderWrapper">
        <div className="slider-container">
          <Slider {...settings}>
            {services.map((item, index) => {
              return <BottomSliderItem item={item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
