import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import HomeButton from "../homeButton/HomeButton";
import { cursorHover, scrollTo } from "../../functions/functions";

const NavigationItem = styled.a.attrs({
  className: "cursor-hover",
})`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  margin-right: ${(props) => (props.isLast ? "0" : "4rem")};

  @media screen and (max-width: 992px) {
    font-size: 1rem;
    margin-right: ${(props) => (props.isLast ? "0" : "2rem")};
  }
  @media screen and (max-width: 600px) {
    padding-top: 5px;
  }
`;

const Nav = styled.nav`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

export default function NavigationBar() {
  // Animation on the cursor
  useLayoutEffect(() => {
    cursorHover();
  });

  return (
    <NavigationBarContainer>
      <div
        style={{
          transform: "translateY(0.5rem)",
        }}
      >
        <HomeButton />
      </div>
      <Nav>
        <NavigationItem onClick={() => scrollTo("work")}>Work</NavigationItem>
        <NavigationItem onClick={() => scrollTo("about")}>About</NavigationItem>
        <NavigationItem onClick={() => scrollTo("contact")} isLast={true}>
          Contact
        </NavigationItem>
      </Nav>
    </NavigationBarContainer>
  );
}
