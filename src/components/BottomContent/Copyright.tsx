import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Index.module.scss";

const Copyright: FC = () => {
  return (
    <div
      className={classNames({
        [styles.copyright]: true,
        ["py-4"]: true,
      })}
    >
      ⓒ 2023 Hyperhire
    </div>
  );
};

export default Copyright;
