import React, { useState } from "react";
import ExpandedWork from "./ExpandedWork";

import styles from "./Experience.module.css";

const Experience = () => {
  const [workExpand, setWorkExpand] = useState("");

  const closeExpand = () => {
    setWorkExpand("");
  };

  return (
    <>
      {workExpand !== "" && <ExpandedWork onClose={closeExpand} title={workExpand} />}

      <div className={styles.experience}>
        <h2 className="hiddenEl">My Work </h2>
        <h3 className="hiddenEl">Experience and Personal Projects</h3>
        <div className={styles.workgrid}>
          <div
            className={`${styles.workcard} hiddenEl`}
            onClick={() => {
              setWorkExpand("FlowState");
            }}
          >
            <div className={`${styles.workcardIm}`}>🧠</div>
            <h4>FlowState</h4>
            <h5>
              Application to Regulate Focus and Attentions, Click for more...
            </h5>
          </div>
          <div
            className={`${styles.workcard} hiddenEl`}
            onClick={() => {
              setWorkExpand("Digital Upscale");
            }}
          >
            <div className={`${styles.workcardIm}`}>📧</div>
            <h4>Digital Upscale</h4>
            <h5>Social Media Marketing Agency, Click for more...</h5>
          </div>
          <div
            className={`${styles.workcard} hiddenEl`}
            onClick={() => {
              setWorkExpand("VoteBook");
            }}
          >
            <div className={`${styles.workcardIm}`}>⏳</div>
            <h4>VoteBook</h4>
            <h5>Instant Voting Application, Click for more...</h5>
          </div>
          <div
            className={`${styles.workcard} hiddenEl`}
            onClick={() => {
              setWorkExpand("RepSpace");
            }}
          >
            <div className={`${styles.workcardIm}`}>📖</div>
            <h4>RepSpace</h4>
            <h5>Study Session Application, Click for more...</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
