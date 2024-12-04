import React, { FC } from "react";

import styles from "./BenefitCard.module.scss";

interface PropTypes {
  title: string;
  description: string;
}

const BenefitCard: FC<PropTypes> = (props: PropTypes) => {
  const { title, description } = props;
  return (
    <div className={styles.wrapper}>
      <h3 className="pb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;
