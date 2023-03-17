import React from "react";

import styles from "./AboutMe.module.css";
import bg from "../../assets/purpleBg.jpg";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe} style={{ backgroundImage: `url(${bg})` }}>
      <h1>About Me</h1>
      <h2>Weaving creativity into visually-stunning Websites</h2>
      <p>I am a skilled web developer and designer with a passion for creating functional and visually appealing websites. With years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, and various web design tools. I am dedicated to delivering high-quality work that meets the unique needs and goals of each of my clients.</p>
    </div>
  );
};

export default AboutMe;
