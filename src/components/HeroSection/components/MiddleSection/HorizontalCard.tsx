import React, { FC } from "react";
import classNames from "classnames";

import styles from "./HorizontalCard.module.scss";

interface PropTypes {
  // eslint-disable-next-line no-unused-vars
  active: any;
  item: {
    name: string;
    avater: string;
    flag: string;
    experience: string;
    tags: string[];
  };
}

const HorizontalCard: FC<PropTypes> = (props: PropTypes) => {
  const { name, avater, flag, experience, tags } = props.item;
  return (
    <div
      className={classNames({
        [styles.cardWrapper]: true,
        [styles.active]: props.active,
      })}
    >
      <div className={styles.avater}>
        <img src={avater} alt="" />
        <img className={styles.flag} src={flag} alt="" />
      </div>
      <div className={styles.title}>
        <h3>{name}</h3>
        <p>{experience}</p>
      </div>
      <div className={styles.tags}>
        {tags.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default HorizontalCard;
