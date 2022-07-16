import React from "react";
import styled from "styled-components";
import ArrowDown from "../arrowDown/ArrowDown";

const AboutOverviewText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
`;

const AboutRedirection = styled.p`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  margin: 0;
`;

export default function AboutOverview() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minHeight: "80%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AboutOverviewText>
          I am a curious person, living my dream of my biggest my passion which
          is developing. I have a strong empathy towards customers and love to
          translate complex problems into simple & intuitive solutions. <br />
          <br />I am also a dedicated worker who wants to learn things while
          crafting user-centric products.
        </AboutOverviewText>
        <div
          style={{
            display: "flex",
            marginTop: "6rem",
            justifyContent: "center",
          }}
        >
          <a
            href="#"
            style={{
              flexShrink: 0,
              flexGrow: 0,
              display: "inline-flex",
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <AboutRedirection>More about me</AboutRedirection>
            <div
              style={{
                marginLeft: "2rem",
                transform: "rotate(-90deg)",
              }}
            >
              <ArrowDown />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
