import React from "react";
import styled from "styled-components";
import NavigationBar from "../../component/navigationBar/NavigationBar";
import AnimatedOrbs from "../../component/orbs/AnimatedOrbs";
import ArrowDown from "../../component/arrowDown/ArrowDown";
import WorkOverview from "../../component/workOverview/WorkOverview";
import assetImage from "../../assets/images/test_image.jpg";
import soloso from "../../assets/images/SoLoSo.png";
import Contacts from "../../component/contacts/Contacts";
import AboutOverview from "../../component/aboutOverview/AboutOverview";
import { copy } from "../../functions/functions";

const LandingSectionTitle = styled.h1`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 150px;
  margin: 0;
  height: 11.5rem;
  animation: translateIn 1s ease-in-out;
  animation-delay: calc(var(--order) * 250ms);

  @keyframes translateIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 992px) {
    font-size: 100px;
  }
  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

const LandingSectionSubTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  margin: 0;
  animation: translateIn 1s ease-in-out;
  animation-delay: 750ms;

  @keyframes translateIn {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const HiddenWrapper = styled.div`
  overflow: hidden;
  height: 11.5rem;
  visibility: hidden;
  animation: 0s linear 500ms forwards hidden;
  animation-delay: calc(var(--order) * 500ms);


  @keyframes hidden {
    to {
      visibility: visible;
    }
  },
`;

const SecondSectionTitle = styled.h2.attrs({
  className: "cursor-email cursor-hover",
})`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 5rem;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 1150px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 992px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export default function LandingPage() {
  // Let the user know that we copy the email to the clipboard.
  function handleEmailMe() {
    copy();
    const cursor = document.getElementById("cursor");
    cursor.innerText = "Email copied!";
  }

  return (
    <div
      style={{
        minHeight: "600px",
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
          minHeight: "600px",
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
              <div style={{ overflow: "hidden", height: "11.5rem" }}>
                <LandingSectionTitle style={{ "--order": 0 }}>
                  Bonjour, I'm
                </LandingSectionTitle>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <HiddenWrapper style={{ "--order": 1 }}>
                  <LandingSectionTitle style={{ "--order": 1 }}>
                    Mickaël
                  </LandingSectionTitle>
                </HiddenWrapper>
                <HiddenWrapper
                  style={{
                    "--order": 2,
                    display: "flex",
                    alignItems: "end",
                    marginBottom: "4.5%",
                    marginLeft: "5%",
                  }}
                >
                  <div>
                    <LandingSectionSubTitle>
                      JUNIOR FRONT
                    </LandingSectionSubTitle>
                    <LandingSectionSubTitle>
                      END DEVELOPER
                    </LandingSectionSubTitle>
                  </div>
                </HiddenWrapper>
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
          minHeight: "600px",
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
        <WorkOverview img={soloso} title="SoLoSo" />
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
