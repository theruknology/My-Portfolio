import React, { useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import FloatingSocials from "./components/FloatingSocials/FloatingSocials";
import Hero from "./components/Hero/Hero";
import Socials from "./components/YouTube/YouTube";
import "./index.css";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showEl");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.hiddenEl`);
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <FloatingSocials />
      <Hero />
      <AboutMe />
      <Experience />
      <Socials />
    </>
  );
}
