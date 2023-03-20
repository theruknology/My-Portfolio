import React from "react";

import styles from "./AboutMe.module.css";
import bg from "../../assets/purpleBg.jpg";
import portrait from "../../assets/photoer.jpg";
import Pills from "../UI/Pills";

const AboutMe = () => {
  console.log("loaded About me");
  return (
    <div
      className={`${styles.aboutMe}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="hiddenEl">About Me</h1>
      <h2 className="hiddenEl">
        Weaving Creativity into visually-"stunning" Websites ⭐
      </h2>
      <p className="hiddenEl">
        Hello!, My name is Mohammed Ruknuddin, and I seek to create amazing
        visuals, speacially using programming. I am a skilled web developer and
        designer with a passion for creating functional and visually appealing
        websites.
      </p>
      <p className="hiddenEl">
        Come Today, I have spent most of my time mastering and sharpening my
        skills in web design and graphic design, and en route of becoming a
        Full-stack web developer.
      </p>
      <p className="hiddenEl">
        My main focus, right now, is to work with amazing people to use my
        skills to help and elevate. I also run a YouTube channel where I
        document my journey, and share tips on Web Development.
      </p>
      <div
        className={`${styles.portrait} hiddenEl`}
        style={{ backgroundImage: `url(${portrait})` }}
      >
        <div className={styles.shadowP}></div>
      </div>
      <div className="flex flex-col gap-3 text-center items-center hiddenEl">
        <Pills>
          Languages:{" "}
          <span className={styles.techPill}>
            HTML, CSS, Javascript, Python, Java.
          </span>
        </Pills>
        <Pills>
          Frameworks and Libraries:{" "}
          <span className={styles.techPill}>ReactJS, JQuery.</span>
        </Pills>
        <Pills>
          Tools:{" "}
          <span className={styles.techPill}>Nodejs, Firebase, Wordpress.</span>
        </Pills>
      </div>
    </div>
  );
};

export default AboutMe;
