import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import ContactMeLine from "./ContactMeLine";
import { copy } from "../../functions/functions";

const ContactTitleEmail = styled.a.attrs({
  className: "cursor-email cursor-hover",
})`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 150px;
  margin: 0;
  text-decoration: none;
  color: black;
  cursor: none;
`;

const ContactTitle = styled.a.attrs({ className: "cursor-hover" })`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 150px;
  margin: 0;
  text-decoration: none;
  color: black;
  cursor: none;
`;

export default function Contacts() {
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

    const cursor = document.getElementById("cursor");
    const cursorPoint = document.getElementById("cursor-point");
    const cursorEmail = document.querySelectorAll(".cursor-email");

    // For all the elements with the class "cursor-email" with apply those modifications.
    // Cursor effect with the "Email me" inside.
    cursorEmail.forEach(function (thisCursorHover) {
      // Change the cursor to "Email me"
      thisCursorHover.addEventListener("mouseenter", () => {
        const left = cursor.style.left;
        const top = cursor.style.top;
        cursor.innerText = "Email me";
        cursor.style.cssText =
          "font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 1.25rem; display: flex; justify-content: center; align-items: center; text-align: center;";

        cursor.style.height = "100px";
        cursor.style.width = "100px";
        cursor.style.opacity = "1";
        cursor.style.backgroundColor = "#606C38";
        cursorPoint.style.opacity = "0";

        cursor.style.left = left;
        cursor.style.top = top;
      });

      // Remove the text and put the cursor back to normal.
      thisCursorHover.addEventListener("mouseleave", () => {
        cursorPoint.style.opacity = "1";

        cursor.style.height = "30px";
        cursor.style.width = "30px";
        cursor.style.backgroundColor = "transparent";
        cursor.innerText = "";
      });
    });
  });

  function handleEmailMe() {
    copy();
    const cursor = document.getElementById("cursor");
    cursor.innerText = "Email copied!";
  }

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
            <ContactTitleEmail onClick={handleEmailMe} isFirst={true}>
              Email
            </ContactTitleEmail>
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
