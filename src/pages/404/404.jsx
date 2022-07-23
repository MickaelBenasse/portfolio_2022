import React, { useLayoutEffect } from "react";
import video from "../../assets/videos/VincentVega.gif";
import "./404.css";
import AnimatedOrbs from "../../component/orbs/AnimatedOrbs";
import { cursorHover } from "../../functions/functions";

export default function PageNotFound() {
  // Animation on the cursor
  useLayoutEffect(() => {
    cursorHover();
  });

  return (
    <div>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          overflowY: "hidden",
          height: "100vh",
        }}
      >
        <AnimatedOrbs />
      </div>
      <div className="grid">
        <p className="item-1">Are you lost?</p>
        <div className="item-2">
          <a href="/" className="cursor-hover">
            Back to home
          </a>
        </div>
        <div className="item-3">
          <img src={video} alt="Vincent Vega gif" />
        </div>
      </div>
    </div>
  );
}
