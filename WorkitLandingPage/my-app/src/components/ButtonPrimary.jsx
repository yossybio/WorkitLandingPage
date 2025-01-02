// import React from "react";
import styleSheet from "../assets/styles/ButtonPrimary.module.css";

export default function ButtonPrimary(props) {
  return (
    <a href="#" className={styleSheet.primaryBtnStyle}>
      {props.name}
    </a>
  );
}
