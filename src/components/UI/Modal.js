import React from "react";
import ReactDOM from "react-dom";

import styles from "./UI.module.css";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full overflow-hidden h-full
  bg-gray-900 bg-opacity-70"
    ></div>
  );
};

const FullModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.fullModal}>{props.children}</div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default FullModal;
