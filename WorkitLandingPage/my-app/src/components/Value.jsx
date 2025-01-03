// import React from "react";
import styleSheet from "../assets/styles/Value.module.css";

export default function Value(props) {
  return (
    <div className={styleSheet.container}>
      <div className={styleSheet.border}>{props.sequence}</div>
      <div className={styleSheet.valueText}>
        <h4 className={styleSheet.valueCaption}>{props.caption}</h4>
        <p className={styleSheet.valueDetails}>{props.details}</p>
      </div>
    </div>
  );
}
