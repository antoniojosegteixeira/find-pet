import React from "react";

export default function LoginSvg({ img }) {
  return (
    <svg
      width="687"
      height="702"
      viewBox="0 0 687 702"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_121_34"
        maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="44"
        y="67"
        width="591"
        height="539"
      >
        <path
          d="M56.1838 495.687C34.1887 436.353 48.5617 366.061 64.4454 310.035C80.0519 253.526 96.8919 210.8 122.058 174.807C146.848 138.713 179.864 109.733 219.357 91.4691C258.373 73.4841 304.242 66.3175 356.231 68.1412C408.321 69.5843 467.286 80.2214 519.216 114.634C571.247 148.666 616.62 206.575 630.292 273.034C643.487 339.772 624.98 415.06 577.878 457.759C531.252 500.178 456.03 510.009 387.673 536.774C318.94 563.438 256.972 607.417 196.569 605.358C136.265 602.917 77.9016 554.54 56.1838 495.687Z"
          fill="#596A96"
        />
      </mask>
      <g mask="url(#mask0_121_34)">
        <rect
          x="-107.435"
          y="-28.9996"
          width="918"
          height="727"
          fill="#A0D6E7"
        />
        <rect
          x="114.565"
          y="86.0003"
          width="559"
          height="498"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_121_34"
            transform="translate(0 -0.00348392) scale(0.00171527 0.00192537)"
          />
        </pattern>
        {img}
      </defs>
    </svg>
  );
}
