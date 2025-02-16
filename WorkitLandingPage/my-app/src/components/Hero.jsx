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
            Data <span>tailored</span> <br className={StyleSheet.newLine} />
            to <br className={StyleSheet.newLine} />
            your needs.
          </h1>
          <ButtonPrimary name="Learn more" />
        </div>
      </div>
      <Ornamental />
    </main>
  );
}
