import React from "react";
import Pills from "../UI/Pills";

import styles from "./Socials.module.css";

const FloatingSocials = () => {
  return (
    <div className={styles.socials}>
      <Pills>
        <div className={styles.links}>
          <Pills>
            <div className={styles.gitIcon}>GitHub</div>
          </Pills>
          <a>Instagram</a>
          <a>Mail</a>
        </div>
      </Pills>
    </div>
  );
};

export default FloatingSocials;
