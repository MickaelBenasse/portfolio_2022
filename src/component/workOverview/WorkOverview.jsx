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

  @media screen and (max-width: 992px) {
    font-size: 7.5rem;
    position: relative;
    z-index: 10;
  }
  @media screen and (max-height: 600px) {
    position: relative;
    z-index: 10;
  }

  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

const Section = styled.section`
  min-height: 800px;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 992px) {
    min-height: 600px;
  }
  @media screen and (max-width: 600px) {
    min-height: 450px;
  }
  @media screen and (max-width: 400px) {
    min-height: 300px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 992px) {
    top: -200px;
  }
  @media screen and (max-width: 600px) {
    top: -300px;
  }
  @media screen and (max-width: 400px) {
    top: -250px;
  }
`;

export default function WorkOverview({ img, title }) {
  const [underText, setUnderText] = useState(null);
  const colorPalette = new ColorPalette();

  useLayoutEffect(() => {
    setUnderText(document.getElementById(`under-text-${title}`));
  }, [title]);

  return (
    <Section>
      <div>
        <div id={`under-text-${title}`}>
          <WorkTitle>{title}</WorkTitle>
        </div>
        <Wrapper>
          <AnimatedBlob
            title={title}
            colorPalette={colorPalette}
            img={img}
            underText={underText}
          />
        </Wrapper>
      </div>
    </Section>
  );
}

WorkOverview.prototype = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
