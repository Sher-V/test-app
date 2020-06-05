import React from "react";
import Title from "../../common/title";
import ListElement from "../../common/list-element";
import styles from "../styles.module.css";

interface element {
  title: string;
  value: string | element[];
}

interface Props {
  title: string;
  elements: element[];
}

const Block: React.FC<Props> = ({ title, elements }) => (
  <React.Fragment>
    <div className="list__element">
      <Title title={title} />
      <div className="list__text" />
    </div>
    {elements.map((element, i) => {
      if (typeof element.value !== "string") {
        return (
          <ListElement
            key={`li-${i}`}
            title={element.title}
            value={
              <React.Fragment>
                <div className={styles.menu__element}>
                  <Title title={""} />
                  <div style={{ width: "50%", marginRight: "25px" }} />
                </div>
                {element.value.map((subElement, index) => (
                  <ListElement
                    key={`li-li-${index}`}
                    title={subElement.title}
                    value={subElement.value}
                  />
                ))}
              </React.Fragment>
            }
          >
          </ListElement>
        );
      }
      return (
        <ListElement
          key={`li-${i}`}
          title={element.title}
          value={element.value}
        />
      );
    })}
  </React.Fragment>
);
export default Block;
