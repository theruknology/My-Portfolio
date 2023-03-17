import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import FloatingSocials from "./components/FloatingSocials/FloatingSocials";
import Hero from "./components/Hero/Hero";
import "./index.css";

export default function App() {
  return (
    <>
    <FloatingSocials />
    <Hero />
    <AboutMe />
    </>
  );
}
