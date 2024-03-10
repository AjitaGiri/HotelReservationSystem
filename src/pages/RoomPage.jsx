import React from "react";
import Heading from "../components/c/Common/Heading";
import Rooms from "../components/c/Home/Rooms";

export default function Room() {
  return (
    <>
      <Heading heading="Room" title="Home" subtitle="Room" />
      <Rooms />
    </>
  );
}