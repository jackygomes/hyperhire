import React, { FC } from "react";
import styles from "./BottomSliderItem.module.scss";

interface PropTypes {
  item: {
    icon: string;
    text: string;
  };
}
const BottomSliderItem: FC<PropTypes> = (props: PropTypes) => {
  const { icon, text } = props.item;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default BottomSliderItem;
