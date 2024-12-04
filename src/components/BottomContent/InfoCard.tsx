import React, { FC } from "react";

import styles from "./BottomSection.module.scss";

interface PropTypes {
  item: {
    title: string;
    midText: string;
    bottomText: string;
  };
}

const InfoCard: FC<PropTypes> = (props: PropTypes) => {
  const { title, midText, bottomText } = props.item;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.title}>{title}</div>
      <div>{midText}</div>
      <div>{bottomText}</div>
    </div>
  );
};

export default InfoCard;
