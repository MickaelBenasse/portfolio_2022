import React from "react";
import styled from "styled-components";
import HomeButton from "../homeButton/HomeButton";

const NavigationItem = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 20px;
  padding-right: 4rem;
  text-decoration: none;
  color: black;
`;

export default function NavigationBar() {
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
      <div>
        <NavigationItem href="#">Work</NavigationItem>
        <NavigationItem href="#">About</NavigationItem>
        <NavigationItem href="#">Contact</NavigationItem>
      </div>
    </div>
  );
}
