import React from "react";
import styled from "styled-components";
import NavigationBar from "../../component/navigationBar/NavigationBar";
import AnimatedOrbs from "../../component/orbs/AnimatedOrbs";
import ArrowDown from "../../component/arrowDown/ArrowDown";
import WorkOverview from "../../component/workOverview/WorkOverview";
import assetImage from "../../assets/images/test_image.jpg";
import Contacts from "../../component/contacts/Contacts";
import AboutOverview from "../../component/aboutOverview/AboutOverview";
import { copy } from "../../functions/functions";

const LandingSectionTitle = styled.h1`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 150px;
  margin: 0;
`;

const LandingSectionSubTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  margin: 0;
`;

const SecondSectionTitle = styled.h2.attrs({ className: "cursor-email" })`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 5rem;
  margin: 0;
  text-align: center;
`;

export default function LandingPage() {
  // Let the user know that we copy the email to the clipboard.
  function handleEmailMe() {
    copy();
    const cursor = document.getElementById("cursor");
    if (cursor.children.length === 1) {
      cursor.firstChild.textContent = "Email copied!";
    }
  }

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
      <section
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
              <LandingSectionTitle>Bonjour, I'm</LandingSectionTitle>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <LandingSectionTitle>Mickaël</LandingSectionTitle>
                <div style={{ marginBottom: "2.1rem", marginLeft: "2rem" }}>
                  <LandingSectionSubTitle>JUNIOR FRONT</LandingSectionSubTitle>
                  <LandingSectionSubTitle>END DEVELOPER</LandingSectionSubTitle>
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
      </section>
      <section
        id="second-section"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "70%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              cursor: "none",
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => handleEmailMe()}
          >
            <SecondSectionTitle>
              I help people and businesses create their digital identity,
              reflecting their personalities and creativity in an impactful way.
            </SecondSectionTitle>
          </div>
        </div>
      </section>
      <section id="work">
        <WorkOverview img={assetImage} title="Digiole" />
        <WorkOverview img={assetImage} title="SoLoSo" />
        <WorkOverview img={assetImage} title="AssoEsaip" />
      </section>
      <section id="about">
        <AboutOverview />
      </section>
      <section id="contact" style={{ position: "relative" }}>
        <Contacts />
      </section>
    </div>
  );
}
