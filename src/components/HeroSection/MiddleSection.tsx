import React, { FC } from "react";
import classNames from "classnames";

import LeftContent from "./components/MiddleSection/LeftContent";
import RightContent from "./components/MiddleSection/RIghtContent";

const MiddleSection: FC = () => {
  return (
    <div
      className={classNames({
        ["container"]: true,
        ["mx-auto"]: true,
        ["pt-32"]: true,
        ["grid grid-cols-2"]: true,
      })}
    >
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default MiddleSection;
