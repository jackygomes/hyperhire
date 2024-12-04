import React, { FC } from "react";
import styles from "./TopSection.module.scss";
import classNames from "classnames";
import BlockContent from "./BlockContent";

const TopSection: FC = () => {
  return (
    <div
      className={classNames({
        ["grid grid-cols-4"]: true,
      })}
    >
      <div
        className={classNames({
          [styles.left]: true,
        })}
      >
        <div
          className={classNames({
            [styles.heading]: true,
            ["pb-6"]: true,
          })}
        >
          <img src="/logo.png" alt="hyperhire" />
        </div>
        <p
          className={classNames({
            [styles.slogan]: true,
            ["pb-6"]: true,
          })}
        >
          우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
        </p>
        <div className={styles.contactInfo}>
          <p>010-0000-0000</p>
          <p>aaaaa@naver.com</p>
        </div>
      </div>
      <BlockContent />
    </div>
  );
};

export default TopSection;
