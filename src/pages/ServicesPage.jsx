import React from "react";
import Heading from "../components/c/Common/Heading";
import Services from "../components/c/Home/Service";
import Sliders from "../components/c/Home/Slider";
export default function Service() {
  return (
    <>
      <Heading heading="Services" title="Home" subtitle="Services" />
      <Services />
      <Sliders />
    </>
  );
}