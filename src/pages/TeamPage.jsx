import React from "react";
import Heading from "../components/c/Common/Heading";
import Teams from "../components/c/Home/Team";

export default function Team() {
  return (
    <>
      <Heading heading="Team" title="Home" subtitle="Team" />
      <Teams />
    </>
  );
}