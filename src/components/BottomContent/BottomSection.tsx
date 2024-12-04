import React, { FC } from "react";
import InfoCard from "./InfoCard";

import styles from "./BottomSection.module.scss";

const BottomSection: FC = () => {
  const infoCards = [
    {
      title: "상호명",
      midText: "하이퍼하이어",
      bottomText: "Hyperhire India Private Limited",
    },
    {
      title: "대표 CEO",
      midText: "김주현",
      bottomText: "Juhyun Kim",
    },
    {
      title: "사업자등록번호 CIN",
      midText: "427-86-01187",
      bottomText: "U74110DL2016PTC290812 ",
    },
    {
      title: "주소 ADDRESS",
      midText: "서울특별시 강남대로 479, 지하 1층 238호 ",
      bottomText:
        "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {infoCards.map((item, index) => {
        return <InfoCard item={item} key={index} />;
      })}
    </div>
  );
};

export default BottomSection;
