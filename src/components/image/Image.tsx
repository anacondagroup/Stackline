import React from "react";
import "./styles.scss";

interface ImageProp {
  url: string;
  title: string;
  subtitle: string;
}

export const Image = ({ url, title, subtitle }: ImageProp) => {
  return (
    <>
      <div className="image-container">
        <img src={url}></img>
      </div>
      <div className="title-container">{title}</div>
      <div className="description-container">{subtitle}</div>
    </>
  );
};
