import React from "react";

import styles from "./YouTube.module.css";
import mailIcon from "../../assets/mailIcon.png";
import instaIcon from "../../assets/Instagram.png";
import gitIcon from "../../assets/GitHub.png";

const Socials = () => {
  return (
    <div className={styles.youtube}>
      <h2 className="hiddenEl">Follow My Journey On YouTube</h2>
      <p className="hiddenEl">
        Working on personal side projects becomes a lot intuitive when also
        trying to document it. So that's what I did. Starting to document your
        own work does indicate a respectable level of expertise, which I don't
        really believe to have in the field of Web Development, but you gotta
        "Fake it till you make it!" And I decided to document almost all of my
        projects on a YouTube channel I started 5 years ago, to give a
        behind-the-scenes view into what goes into my thinking when writing a
        program.
      </p>
      <iframe
        className="hiddenEl"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2cXcJzSxtEc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h2 className="hiddenEl">Get In Touch</h2>
      <p className="hiddenEl">
        Right now I am looking to work on various projects that challenge me and
        let me collaborate with new teams, so if you are looking for a Web
        developer, Hit me up!
      </p>
      <div className={styles.socialLinks} id="socials">
        <a
          className="hiddenEl"
          href="mailto:iosrukn123@gmail.com"
          target="_blank"
          style={{ backgroundImage: `url(${mailIcon})` }}
        ></a>
        <a
          className="hiddenEl"
          href="https://www.instagram.com/the_ruknology/"
          target="_blank"
          style={{ backgroundImage: `url(${instaIcon})` }}
        ></a>
        <a
          className="hiddenEl"
          href="https://github.com/theruknology/"
          target="_blank"
          style={{ backgroundImage: `url(${gitIcon})` }}
        ></a>
      </div>
    </div>
  );
};

export default Socials;
