import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";
import { Orb } from "../../model/orb";
import { ColorPalette } from "../../model/colorsPalette";

export default function AnimatedOrbs() {
  useLayoutEffect(() => {
    // Create PixiJS app
    const app = new PIXI.Application({
      view: document.querySelector(".orb-canvas"), //
      // auto adjust size to fit the current window
      resizeTo: window,
      // transparent background, we will be creating a gradient background later using CSS
      backgroundAlpha: 0,
    });

    const colorPalette = new ColorPalette();
    // Create orbs
    const orbs = [];

    let previousColor;

    // Create 2 orbs only
    for (let i = 0; i < 2; i++) {
      let color = colorPalette.randomColor();
      if (i === 0) {
        previousColor = color;
      }
      while (color === previousColor) {
        color = colorPalette.randomColor();
      }

      // each orb will be black, just for now
      const orb = new Orb(color);
      app.stage.addChild(orb.graphics);

      orbs.push(orb);
    }

    // Animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      app.ticker.add(() => {
        // update and render each orb, each frame. app.ticker attempts to run at 60fps
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      // perform one update and render per orb, do not animate
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }

    app.stage.filters = [new KawaseBlurFilter(20, 10, true)];
  });

  return <canvas className="orb-canvas" style={{ height: "125vh" }} />;
}
