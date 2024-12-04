import React, { FC } from "react";
import BlockContentCard from "./BlockContentCard";

import styles from "./BlockContent.module.scss";
import classNames from "classnames";

const BlockContent: FC = () => {
  const cardItems = [
    {
      icon: "/icon-code.png",
      text: "해외 개발자 원격 채용",
    },
    {
      icon: "/icon-avatar.png",
      text: "외국인 원격 채용 (비개발)",
    },
    {
      icon: "/icon-kor.png",
      text: "한국어 가능 외국인 채용",
    },
    {
      icon: "/icon-gear.png",
      text: "해외 개발자 활용 서비스",
    },
  ];

  return (
    <div
      className={classNames({
        [styles.cardItemWrapper]: true,
        ["col-span-2"]: true,
      })}
    >
      {cardItems.map((item, index) => {
        return <BlockContentCard item={item} key={index} />;
      })}
    </div>
  );
};

export default BlockContent;
