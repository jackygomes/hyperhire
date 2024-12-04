"use client";

import React, { FC } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import styles from "./EmployementService.module.scss";

const EmployementService: FC = () => {
  const options = [
    "채용",
    "해외 개발자 원격 채용",
    "외국인 원격 채용 (비개발 직군)",
    "한국어 가능 외국인 채용",
  ];
  const defaultOption = options[0];

  const selectOption = () => {
    console.log("Selected Option");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdownWrap}>
        <Dropdown
          className={styles.myDropdown}
          controlClassName={styles.myControl}
          menuClassName={styles.myMenu}
          onChange={selectOption}
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
      <p>해외 개발자 활용 서비스</p>
    </div>
  );
};

export default EmployementService;
