import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface PropTypes {
  text: string;
  customStyles?: any;
}

const Button: FC<PropTypes> = (props: PropTypes) => {
  const { text, customStyles } = props;

  return (
    <>
      <button
        className={classNames({
          [customStyles]: true,
          [styles.button]: true,
        })}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
