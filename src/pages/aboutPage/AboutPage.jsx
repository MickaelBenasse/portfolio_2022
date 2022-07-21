import React, { useLayoutEffect } from "react";
import HomeButton from "../../component/homeButton/HomeButton";
import myImage from "../../assets/images/BW-Mickael-benasse.jpg";
import "./aboutPage.css";
import { waiting } from "../../functions/functions";

export default function AboutPage() {
  useLayoutEffect(() => {
    const meText = document.querySelector(".me");
    const hoverWrapper = document.querySelector(".hover-wrapper");

    // each windows resize we set the new position
    window.addEventListener("resize", positionHoverWrapper);

    waiting().then(() => {
      positionHoverWrapper();
    });

    meText.addEventListener("mouseover", () => {
      meText.style.opacity = "0.1";
      hoverWrapper.style.opacity = "1";
    });
    meText.addEventListener("mouseleave", () => {
      meText.style.opacity = "1";
      hoverWrapper.style.opacity = "0";
    });
  });

  function positionHoverWrapper() {
    const meText = document.querySelector(".me");
    const title = document.querySelector(".title");
    const titleHover = document.querySelector(".title-hover");
    const hoverWrapper = document.querySelector(".hover-wrapper");
    const image = document.querySelector(".image");

    // Set height width of the wrapper to the dimension of the image + position it correctly.
    hoverWrapper.style.top = meText.offsetTop + "px";
    hoverWrapper.style.left = meText.offsetLeft + "px";
    hoverWrapper.style.width = image.offsetWidth + "px";
    hoverWrapper.style.height = image.clientHeight + "px";

    // Set height width of the hover text as the exact same as the normal text.
    titleHover.style.top = title.offsetTop - meText.offsetTop + "px";
    titleHover.style.left = title.offsetLeft - meText.offsetLeft + "px";
    titleHover.style.width = title.offsetWidth + "px";
    titleHover.style.height = title.offsetHeight + "px";
  }

  return (
    <section className="section">
      <div className="pageWrapper">
        <HomeButton />
        <div className="contentWrapper">
          <div>
            <h1 className="title">
              I’m Mickaël Benasse and this is
              <span className="me">me</span>
              (obviously).I’m a french front-end developper and proud newbie
              home cook.
            </h1>
            <div className="hover-wrapper">
              <img
                className="image"
                src={myImage}
                alt="Mickaël Benasse image"
              />
              <p className="title title-hover">
                I’m Mickaël Benasse and this is
                <span className="me">me</span>
                (obviously).I’m a french front-end developper and proud newbie
                home cook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
