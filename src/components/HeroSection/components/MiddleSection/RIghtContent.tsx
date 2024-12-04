"use client";

import React, { FC, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HorizontalCard from "./HorizontalCard";
import styles from "./RightContent.module.scss";

const RightContent: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [oldIndex, setOldIndex] = useState(0);

  const sliderItem = [
    {
      name: "Abhishek Gupta",
      avater: "/avater-1.png",
      flag: "/flag-1.png",
      experience: "마케팅 · 2y+",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      name: "Abhishek Gupta",
      avater: "/avater-1.png",
      flag: "/flag-1.png",
      experience: "마케팅 · 2y+",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      name: "Abhishek Gupta",
      avater: "/avater-1.png",
      flag: "/flag-1.png",
      experience: "마케팅 · 2y+",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "173px",
    slidesToShow: 1,
    speed: 500,
    afterChange: (current: any) => setActiveSlide(current),
  };

  return (
    <div className="mainSliderWrapper">
      <div className={styles.sliderWrapper}>
        <div className="slider-container">
          <Slider {...settings}>
            {sliderItem.map((item, index) => {
              return (
                <HorizontalCard
                  active={activeSlide === index}
                  item={item}
                  key={index}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
