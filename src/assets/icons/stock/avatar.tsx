import React from "react";
/**
 * Account Profile Icon
 * @param {Object} props Component props
 * @returns {React.Component} React component
 */
const SVG = (props: unknown): unknown => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <mask
      id="mask0_35498_13"
      style={{maskType: "alpha"}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="48"
      height="48"
    >
      <rect width="48" height="48" rx="24" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_35498_13)">
      <rect y="-6.23999" width="48" height="60" fill="url(#pattern0)" />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_35498_13" transform="scale(0.001 0.0008)" />
      </pattern>
      <image
        id="image0_35498_13"
        width="1000"
        height="1250"
      />
    </defs>
  </svg>
);

export default SVG;