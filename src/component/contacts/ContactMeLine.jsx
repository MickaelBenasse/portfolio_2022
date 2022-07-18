import React from "react";
import styled from "styled-components";

const ContactMe = styled.p`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 6rem;
  margin: 0 3rem 0 0;
  width: 100%;

  @media screen and (max-width: 992px) {
    font-size: 5rem;
  }
`;

export default function ContactMeLine({ id }) {
  return (
    <div
      id={id}
      style={{
        maxWidth: "100vw",
        display: "inline-block",
        whiteSpace: "nowrap",
        opacity: 0.15,
        color: "#DDA15E",
      }}
    >
      <ContactMe>
        Contact me Contact me Contact me Contact me Contact me Contact me
        Contact me Contact me Contact me Contact me Contact me Contact me
      </ContactMe>
    </div>
  );
}
