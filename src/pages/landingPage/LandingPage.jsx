import React from "react";
import styled from "styled-components";
import NavigationBar from "../../component/navigationBar/NavigationBar";
import AnimatedOrbs from "../../component/Orbs/AnimatedOrbs";
import ArrowDown from "../../component/arrowDown/ArrowDown";

const Title = styled.h1`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 150px;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 24px;
  margin: 0;
`;

export default function LandingPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "200vh",
      }}
    >
      {/*Orbs fixed at the top */}
      <div style={{ zIndex: -1, position: "absolute" }}>
        <AnimatedOrbs />
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          padding: "2rem 4rem 0 4rem",
          height: "calc(100vh - 2rem)",
        }}
      >
        <NavigationBar />
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "85vh",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <div>
              <Title>Bonjour, I'm</Title>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Title>Mickaël</Title>
                <div style={{ marginBottom: "2.1rem", marginLeft: "2rem" }}>
                  <SubTitle>JUNIOR FRONT</SubTitle>
                  <SubTitle>END DEVELOPER</SubTitle>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
