import React from "react";

import FullModal from "../UI/Modal.js";
import styles from "./Experience.module.css";

const ExpandedWork = (props) => {
  const data = (() => {
    switch (props.title) {
      case "Digital Upscale":
        return (
          <div className={styles.expanded}>
            <div className={styles.expandedHead} onClick={props.onClose}>
              <p> ✖ </p>
              <h2>{props.title}</h2>
            </div>
            <ul>
              <li>
                Implemented a website and designed an alluring landing page for
                marketing agency.
              </li>
              <li>
                {" "}
                Boosted their impressions by creating an optimal internet
                presence.
              </li>
              <li>
                Designed a template for agency's posts on other social media
                platforms, using graphic design laws and principles.
              </li>
              <li>HTML, CSS, Vanilla Javascript, Photoshop.</li>
            </ul>
          </div>
        );
      case "FlowState":
        return (
          <div className={styles.expanded}>
            <div className={styles.expandedHead} onClick={props.onClose}>
              <p> ✖ </p>
              <h2>{props.title}</h2>
            </div>
            <ul>
              <li>
                Implemented a website and designed an alluring landing page for
                marketing agency.
              </li>
              <li>
                {" "}
                Boosted their impressions by creating an optimal internet
                presence.
              </li>
              <li>
                Designed a template for agency's posts on other social media
                platforms, using graphic design laws and principles.
              </li>
              <li>HTML, CSS, Vanilla Javascript, Photoshop.</li>
            </ul>
          </div>
        );
      case "VoteBook":
        return (
          <div className={styles.expanded}>
            <div className={styles.expandedHead} onClick={props.onClose}>
              <p> ✖ </p>
              <h2>{props.title}</h2>
            </div>
            <ul>
              <li>
                Full-stack-engineered a web application for quick creation and
                sharing of short voting polls with friends and family.
              </li>
              <li>
                Implemented data structure for efficient communication with
                backend database.
              </li>
              <li>ReactJS, Firebase Realtime Database, Tailwind CSS, Figma.</li>
            </ul>
          </div>
        );
      case "RepSpace":
        return (
          <div className={styles.expanded}>
            <div className={styles.expandedHead} onClick={props.onClose}>
              <p> ✖ </p>
              <h2>{props.title}</h2>
            </div>
            <ul>
              <li>
                Developed and Designed a web application for scheduling study
                sessions, based on various research on spaced repition
                psychology.
              </li>
              <li>ReactJS, Tailwind CSS.</li>
            </ul>
          </div>
        );

      default:
        return <div>Default</div>;
    }
  })();

  return (
    <>
      <FullModal>{data}</FullModal>
    </>
  );
};

export default ExpandedWork;
