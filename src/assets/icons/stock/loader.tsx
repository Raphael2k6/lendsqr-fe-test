import React from "react";
/**
 * Account Profile Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props: unknown): unknown => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block", shapeRendering: "auto"}}
    width="128px"
    height="128px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#3ed1ee"
      strokeWidth="9"
      r="28"
      strokeDasharray="131.94689145077132 45.982297150257104"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

export default SVG;
