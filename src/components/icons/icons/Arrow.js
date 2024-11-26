import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#263238"
      fillRule="evenodd"
      d="M6.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L4.586 6 .293 1.707A1 1 0 0 1 1.707.293z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrow;
