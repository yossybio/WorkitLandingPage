// import React from "react";
import style from "../assets/styles/ButtonSecondary.module.css";

export default function ButtonSecondary(props) {
  return (
    <a href="#" className={style.secondaryBtnStyle}>
      {props.name}
    </a>
  );
}
