import styles from "./footer-nav.module.scss";
import {
  UilEstate,
  UilHistory,
  UilBars,
  UilSpaceKey,
} from "@iconscout/react-unicons";
import { useState } from "react";
import { SCREEN_TYPE } from "@/constants/screen.constants";

type FooterNavPropTypes = {
  clickHandler: (param: any) => void;
  activeScreen: Number;
};

export default function FooterNav({
  clickHandler,
  activeScreen,
}: FooterNavPropTypes) {
  function handleClick(input: any) {
    clickHandler(input);
  }

  function getClassIfActive(compare: any) {
    if (compare == activeScreen) {
      return styles.icon_active;
    }
    return "";
  }

  function getClassNamesForIcon(type: any) {
    let classes = [styles.nav_icon];
    classes.push(getClassIfActive(type));
    return classes.join(" ");
  }

  return (
    <div className={styles.footer_nav_container}>
      <UilEstate
        onClick={() => handleClick(SCREEN_TYPE.home)}
        className={getClassNamesForIcon(SCREEN_TYPE.home)}
      />
      <UilSpaceKey
        onClick={() => handleClick(SCREEN_TYPE.catalogue)}
        className={getClassNamesForIcon(SCREEN_TYPE.catalogue)}
      />
      <UilHistory
        onClick={() => handleClick(SCREEN_TYPE.history)}
        className={getClassNamesForIcon(SCREEN_TYPE.history)}
      />
      <UilBars
        onClick={() => handleClick(SCREEN_TYPE.menu)}
        className={getClassNamesForIcon(SCREEN_TYPE.menu)}
      />
    </div>
  );
}
