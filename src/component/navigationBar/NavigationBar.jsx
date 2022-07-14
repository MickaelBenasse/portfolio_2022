import React from "react";
import styled from "styled-components";
import HomeButton from "../homeButton/HomeButton";

const NavigationItem = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: black;
  padding-right: ${(props) => (props.isLast ? "0" : "4rem")};
  cursor: pointer;
`;

export default function NavigationBar() {
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
        <NavigationItem href="#">About</NavigationItem>
        <NavigationItem href="#" isLast={true}>
          Contact
        </NavigationItem>
      </nav>
    </div>
  );
}
