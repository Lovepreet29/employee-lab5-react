import * as React from "react";

function SvgRemoveEmployee(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm3 2v2h6v-2h-6zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z" />
    </svg>
  );
}

export default SvgRemoveEmployee;
