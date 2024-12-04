import React, { FC } from "react";
import classNames from "classnames";

import TopSection from "./TopSection";
import styles from "./Index.module.scss";
import BottomSection from "./BottomSection";
import Copyright from "./Copyright";

const BottomContent: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames({
          ["container"]: true,
          ["mx-auto"]: true,
        })}
      >
        <div className="py-20">
          <TopSection />
          <BottomSection />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default BottomContent;
