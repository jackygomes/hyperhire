import React, { FC } from "react";

import classNames from "classnames";

import styles from "./TopSection.module.scss";
import Image from "next/image";
import Button from "../Global/Button";
import EmployementService from "./components/EmployementService";

const TopSection: FC = () => {
  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
        ["container"]: true,
        ["mx-auto"]: true,
      })}
    >
      <div className="logo">
        <Image src="/logo-nav.png" alt="logo" width="114" height="21" />
      </div>
      <EmployementService />
      <div className="contact">
        <Button text="문의하기" customStyles={styles.button}></Button>
      </div>
    </div>
  );
};

export default TopSection;
