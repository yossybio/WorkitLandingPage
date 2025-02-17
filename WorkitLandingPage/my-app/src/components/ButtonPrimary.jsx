// import React from "react";
import styleSheet from "../assets/styles/ButtonPrimary.module.css";

export default function ButtonPrimary(props) {
  return (
    <a
      href="#"
      className={`${styleSheet.primaryBtnStyle} ${
        props.textColor === "purple"
          ? styleSheet.purpleText
          : styleSheet.whiteText
      }`}
    >
      {props.name}
    </a>
  );
}
