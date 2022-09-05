import React from "react";

interface ImageProp {
  url: string;
  subtitle: string;
}

export const Image = ({ url, subtitle }: ImageProp) => {
  return (
    <>
      <div className="image-container">
        <img src={url}></img>
      </div>
      <div className="description-container">{subtitle}</div>
    </>
  );
};
