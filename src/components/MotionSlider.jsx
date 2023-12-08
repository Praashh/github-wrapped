import React from "react";
import Marquee from "react-fast-marquee";

const MotionSlider = () => {
  return (
    <div style={{ marginTop: "-1rem", marginBottom: "1rem", width: "100%" }}>
      <Marquee
        pauseOnHover
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span
          style={{
            color: "rgba(255,161,22)",
            fontWeight: "900",
            marginRight: "2rem",
          }}
        >
          UI Under Maintainace, Please Open it in Dekstop for Better Experience.
        </span>
        <span
          style={{
            marginLeft: "2rem",
            color: "rgb(75, 207, 167)",
            fontWeight: "900",
          }}
        >
          Share Your GitHub Wrapped With Hashtag and Tag US.
        </span>
      </Marquee>
    </div>
  );
};

export default MotionSlider;
