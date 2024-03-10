import React from "react";
import Heading from "../components/c/Common/Heading";
import About from "../components/c/Home/About";
import Team from "../components/c/Home/Team";

export default function AboutUs() {
  return (
    <>
      <Heading heading="About" title="Home" subtitle="About" />
      <About />
      <Team />
    </>
  );
}