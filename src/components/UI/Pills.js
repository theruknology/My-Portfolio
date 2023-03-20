import React from "react";
import styles from "./UI.module.css";

const Pills = (props) => {
  return (
    <>
      <div className={styles.pill}>{props.children}</div>
    </>
  );
};

export default Pills;
