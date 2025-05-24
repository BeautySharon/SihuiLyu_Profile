import React from "react";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Resume />
    </div>
  );
}
