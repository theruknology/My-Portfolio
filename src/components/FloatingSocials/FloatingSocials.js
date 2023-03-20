import React from "react";

import Pills from "../UI/Pills";
import styles from "./Socials.module.css";

const FloatingSocials = () => {
  return (
    <>
      <div className={styles.socials}>
        <a href="#socials">
          <Pills>
            <div className={styles.links}>
              <Pills>
                <div className={styles.gitIcon}>GitHub</div>
              </Pills>
              <p>Instagram</p>
              <p>Mail</p>
            </div>
          </Pills>
        </a>
      </div>
    </>
  );
};

export default FloatingSocials;
