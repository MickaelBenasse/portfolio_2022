import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import ContactMeLine from "./ContactMeLine";

const ContactTitle = styled.a`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 150px;
  margin: 0;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export default function Contacts() {
  function copy() {
    navigator.clipboard.writeText("mickaelbenasse@gmail.com").then();
  }

  useLayoutEffect(() => {
    const contact1 = document.getElementById("contact-1");
    const contact2 = document.getElementById("contact-2");
    const contact3 = document.getElementById("contact-3");
    const contact4 = document.getElementById("contact-4");
    const contact5 = document.getElementById("contact-5");
    const contact6 = document.getElementById("contact-6");

    window.addEventListener("scroll", () => {
      const scrolling = window.scrollY;
      contact1.style.transform = `translateX(${(-scrolling + 3100) * 0.2}px)`;
      contact2.style.transform = `translateX(${(scrolling - 4900) * 0.75}px)`;
      contact3.style.transform = `translateX(${(-scrolling + 2700) * 0.3}px)`;
      contact4.style.transform = `translateX(${(scrolling - 4750) * 0.5}px)`;
      contact5.style.transform = `translateX(${(-scrolling + 2900) * 0.4}px)`;
      contact6.style.transform = `translateX(${scrolling - 5000}px)`;
    });
  });

  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*  Background*/}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1,
          overflowX: "hidden",
        }}
      >
        <ContactMeLine className="contact-line" id="contact-1" />
        <ContactMeLine className="contact-line" id="contact-2" />
        <ContactMeLine className="contact-line" id="contact-3" />
        <ContactMeLine className="contact-line" id="contact-4" />
        <ContactMeLine className="contact-line" id="contact-5" />
        <ContactMeLine className="contact-line" id="contact-6" />
      </div>
      {/*  Content of the section*/}
      <div
        style={{
          width: "80%",
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5rem",
            }}
          >
            <ContactTitle onClick={copy}>Email</ContactTitle>
            <ContactTitle
              href="https://github.com/MickaelBenasse"
              target="_blank"
              style={{ marginLeft: "10rem" }}
            >
              GitHub
            </ContactTitle>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ContactTitle
              href="https://www.linkedin.com/in/micka%C3%ABl-benasse/"
              target="_blank"
            >
              LinkedIn
            </ContactTitle>
          </div>
        </div>
      </div>
    </section>
  );
}
