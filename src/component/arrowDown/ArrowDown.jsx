import React from "react";
import { scrollTo } from "../../functions/functions";
import "./arrowDown.css";

export default function ArrowDown() {
  return (
    <div className="cursor-hover" onClick={() => scrollTo("second-section")}>
      <svg
        width="26"
        height="38"
        viewBox="0 0 26 38"
        fill="purple"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="arrow-down">
          <path
            d="M13 37L12 37.0037C12.0021 37.5553 12.4503 38.001 13.0019 38C13.5534 37.999 14 37.5516 14 37H13ZM14 1.5C14 0.947715 13.5523 0.5 13 0.5C12.4477 0.5 12 0.947715 12 1.5L14 1.5ZM25.5547 18.3321C26.0142 18.0257 26.1384 17.4048 25.8321 16.9453C25.5257 16.4858 24.9048 16.3616 24.4453 16.668L25.5547 18.3321ZM22.5686 19.1209L22.0139 18.2889H22.0139L22.5686 19.1209ZM3.39897 19.1051L3.95504 18.2739L3.39897 19.1051ZM1.55608 16.6689C1.09706 16.3618 0.475982 16.4849 0.168869 16.9439C-0.138243 17.4029 -0.015099 18.024 0.443922 18.3311L1.55608 16.6689ZM14 37L14 1.5L12 1.5L12 37H14ZM24.4453 16.668L22.0139 18.2889L23.1233 19.953L25.5547 18.3321L24.4453 16.668ZM3.95504 18.2739L1.55608 16.6689L0.443922 18.3311L2.84289 19.9362L3.95504 18.2739ZM14 36.9963C13.9719 29.4738 10.2073 22.4571 3.95504 18.2739L2.84289 19.9362C8.5425 23.7496 11.9744 30.1461 12 37.0037L14 36.9963ZM22.0139 18.2889C15.7578 22.4596 12 29.4811 12 37H14C14 30.1498 17.4236 23.7528 23.1233 19.953L22.0139 18.2889Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
}
