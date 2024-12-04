import React, { FC } from "react";

import TopSection from "./TopSection";
import styles from "./Index.module.scss";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

const HeroSection: FC = () => {
  return (
    <div className={styles.wrapper}>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default HeroSection;
