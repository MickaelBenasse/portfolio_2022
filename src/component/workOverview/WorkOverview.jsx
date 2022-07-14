import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ColorPalette } from "../../model/colorsPalette";
import AnimatedBlob from "../animatedBlob/AnimatedBlob";

const WorkTitle = styled.h3`
  font-family: "Butler", sans-serif;
  font-weight: 300;
  font-size: 9rem;
  margin: 0;
  text-align: center;
  color: ${(props) => props.color};
`;

export default function WorkOverview({ img, title }) {
  const [underText, setUnderText] = useState(null);
  const colorPalette = new ColorPalette();

  useLayoutEffect(() => {
    setUnderText(document.getElementById(`under-text-${title}`));
  });

  return (
    <section
      style={{
        width: "100vw",
        height: "110vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div>
        <div id={`under-text-${title}`}>
          <WorkTitle>{title}</WorkTitle>
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <AnimatedBlob
            title={title}
            colorPalette={colorPalette}
            img={img}
            underText={underText}
          />
        </div>
      </div>
    </section>
  );
}

WorkOverview.prototype = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
