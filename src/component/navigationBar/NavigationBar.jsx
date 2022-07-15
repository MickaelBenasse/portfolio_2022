import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import HomeButton from "../homeButton/HomeButton";

const NavigationItem = styled.a.attrs({
  className: "cursor-hover",
})`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-right: ${(props) => (props.isLast ? "0" : "4rem")};
`;

export default function NavigationBar() {
  useLayoutEffect(() => {
    const cursorHover = document.querySelector(".cursor-hover");
    const cursor = document.getElementById("cursor");

    cursorHover.addEventListener("mouseenter", () => {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
      cursor.style.backgroundColor = "#606C38";
      cursor.style.opacity = "0.5";
    });

    cursorHover.addEventListener("mouseleave", () => {
      cursor.style.height = "30px";
      cursor.style.width = "30px";
      cursor.style.backgroundColor = "transparent";
    });
  });

  function scrollTo(element) {
    const thisElement = document.getElementById(element);
    thisElement.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      <div
        style={{
          transform: "translateY(0.5rem)",
        }}
      >
        <HomeButton />
      </div>
      <nav>
        <NavigationItem onClick={() => scrollTo("work")}>Work</NavigationItem>
        <NavigationItem onClick={() => scrollTo("about")}>About</NavigationItem>
        <NavigationItem onClick={() => scrollTo("contact")} isLast={true}>
          Contact
        </NavigationItem>
      </nav>
    </div>
  );
}
