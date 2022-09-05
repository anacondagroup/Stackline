import React from "react";
import { Image } from "../../../components/image/Image";
import { Button } from "../../../components/button/Button";
import "./styles.scss";

export const LeftBar = () => {
  return (
    <>
      <div className="left-container">
        <Image></Image>
        <div className="button-tab"></div>
      </div>
    </>
  );
};
