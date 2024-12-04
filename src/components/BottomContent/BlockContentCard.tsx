import React, { FC } from "react";
import styles from "./BlockContent.module.scss";

interface PropTypes {
  item: {
    icon: string;
    text: string;
  };
}

const BlockContentCard: FC<PropTypes> = (props: PropTypes) => {
  const { icon, text } = props.item;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.goToButton}>
        <span>바로가기</span>
        <img src="/ArrowRightSquare.png" alt="" />
      </div>
    </div>
  );
};

export default BlockContentCard;
