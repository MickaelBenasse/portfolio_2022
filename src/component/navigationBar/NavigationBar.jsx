import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import HomeButton from "../homeButton/HomeButton";
import { scrollTo } from "../../functions/functions";

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
  // Animation on the cursor
  useLayoutEffect(() => {
    const cursorHover = document.querySelectorAll(".cursor-hover");
    const cursor = document.getElementById("cursor");
    const cursorPoint = document.getElementById("cursor-point");
    const cursorEmail = document.querySelectorAll(".cursor-email");

    // Classic hover with opacity
    cursorHover.forEach(function (elementHover) {
      elementHover.addEventListener("mouseenter", () => {
        cursor.style.height = "60px";
        cursor.style.width = "60px";
        cursor.style.backgroundColor = "#606C38";
        cursor.style.opacity = "0.5";
      });

      elementHover.addEventListener("mouseleave", () => {
        cursor.style.height = "30px";
        cursor.style.width = "30px";
        cursor.style.backgroundColor = "transparent";
      });
    });

    // For all the elements with the class "cursor-email" with apply those modifications.
    // Cursor effect with the "Email me" inside.
    cursorEmail.forEach((thisCursorHover) => {
      // Change the cursor to "Email me"
      thisCursorHover.addEventListener("mouseenter", () => {
        cursor.style.height = "100px";
        cursor.style.width = "100px";
        cursor.style.opacity = "1";
        cursor.style.backgroundColor = "#606C38";
        cursorPoint.style.opacity = "0";

        if (cursor.children.length === 0) {
          const element = document.createElement("p");

          const textNode = document.createTextNode("Email me");
          cursor.style.cssText =
            "font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 1.25rem; display: flex; justify-content: center; align-items: center; text-align: center;";
          element.appendChild(textNode);

          cursor.appendChild(element);
        }

        console.log(cursor);
      });

      // Remove the text and put the cursor back to normal.
      thisCursorHover.addEventListener("mouseleave", () => {
        cursorPoint.style.opacity = "1";

        cursor.style.height = "30px";
        cursor.style.width = "30px";
        cursor.style.backgroundColor = "transparent";
        if (cursor.children.length === 1) {
          cursor.firstChild.remove();
        }
      });
    });
  });

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
