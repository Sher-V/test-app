import React from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
}
const Title: React.FC<Props> = ({ title }) => {
  return (
    <div
      className={`${styles.title} list__text list__element_left ${
        !title ? styles["title__no-width"] : ""
      }`}
    >
      {title}
    </div>
  );
};

export default Title;
