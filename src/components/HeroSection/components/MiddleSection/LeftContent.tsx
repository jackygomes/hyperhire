import React, { FC } from "react";
import classNames from "classnames";

import "animate.css";

import styles from "./LeftContent.module.scss";
import BenefitCard from "./BenefitCard";

const LeftContent: FC = () => {
  const benefits = [
    {
      title: "평균 월 120만원",
      description: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
      title: "최대 3회 인력교체",
      description: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
    },
    {
      title: "평균 3일, 최대 10일",
      description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
  ];

  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
      })}
    >
      <div className={styles.top}>
        <h1
          className={classNames({
            [styles.heading]: true,
            ["pb-8"]: true,
            ["animate__animated animate__fadeInUp"]: true,
          })}
        >
          최고의 실력을 가진 <br />
          외국인 인재를 찾고 계신가요?
        </h1>

        <div
          className={classNames({
            [styles.subHeadingWrap]: true,
            ["animate__animated animate__fadeInUp"]: true,
          })}
        >
          <p
            className={classNames({
              [styles.subHeading]: true,
              ["pb-8"]: true,
            })}
          >
            법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로 채용해보세요.
          </p>
          <p
            className={classNames({
              [styles.question]: true,
              ["pb-16"]: true,
            })}
          >
            개발자가 필요하신가요?
          </p>
        </div>
      </div>
      <div
        className={classNames({
          [styles.middle]: true,
          ["animate__animated animate__fadeIn"]: true,
        })}
      >
        {benefits.map((item, index) => {
          return (
            <BenefitCard
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftContent;
