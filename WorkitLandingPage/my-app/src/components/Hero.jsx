// import React from "react";
import StyleSheet from "../assets/styles/hero.module.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Logo from "../assets/images/logo-light.svg";
import leftImage from "../assets/images/bg-pattern-1.svg";
import rightImage from "../assets/images/bg-pattern-2.svg";
import Ornamental from "./Ornamental";

export default function Hero() {
  return (
    <main className={StyleSheet.container}>
      <nav className={StyleSheet.navContainer}>
        <img src={Logo} alt="Workit logo" />
        <ul className={StyleSheet.noBullets}>
          <li>
            <ButtonSecondary name="Apply for access" />
          </li>
        </ul>
      </nav>
      <img
        src={leftImage}
        className={StyleSheet.headerLeftImage}
        alt="Left ovals image"
      />
      <img
        src={rightImage}
        className={StyleSheet.headerRightImage}
        alt="Right ovals image"
      />
      <div className={StyleSheet.mainContent}>
        <div className={StyleSheet.content}>
          <h1 className={StyleSheet.caption}>
            Data <span>tailored</span> <br className={StyleSheet.newLine}/>to <br className={StyleSheet.newLine}/>your needs.
          </h1>
          <ButtonPrimary name="Learn more" />
        </div>
      </div>
      <Ornamental />
      {/* <svg
        className={StyleSheet.ornamental}
        width="100vw"
        height="7.2rem"
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="ornamental"
          d="M0 0L0 72L1440 72L1440 0C1440 0 1082.96 68 722 68C361.039 68 0 0 0 0L0 0Z"
          fill="#FCF8FF"
          fillRule="evenodd"
        />
      </svg> */}
    </main>
  );
}
