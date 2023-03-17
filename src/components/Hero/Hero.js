import React from "react";

import Pills from "../UI/Pills";
import styles from "./Hero.module.css";
import stars from "../../assets/stars.png";

const Hero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${stars})` }}>
      <h1>
        Creative Websites for a <br></br> Fast-Paced World
      </h1>
      <h2>Mohammed Ruknuddin</h2>
      <div className={styles.pillSec}>
        <Pills>UI/UX Designer</Pills>
        <Pills>Web Developer</Pills>
        <Pills>Graphic Designer</Pills>
      </div>
    </div>
  );
};

export default Hero;
