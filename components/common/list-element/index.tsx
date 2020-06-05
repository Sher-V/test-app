import React from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  value: string | React.ReactNode;
}

const ListElement: React.FC<Props> = ({ title, value }) => {
  const isString = typeof value === "string";
  return (
    <div className="list__element">
      <div
        className={`${styles.list__text} ${
          !title && styles["list__text-no-width"]
        }`}
      >
        {title}
      </div>
      <div
        className={`${styles.list__text} ${
          !isString && styles["list__text-menu"]
        } ${
          typeof value === "string" && !value.length
            && styles["list__text-no-value"]
        }`}
      >
        {value}
      </div>
    </div>
  );
};

export default ListElement;
