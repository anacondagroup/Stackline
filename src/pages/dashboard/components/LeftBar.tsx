import React from "react";
import { Image } from "../../../components/image/Image";
import { Button } from "../../../components/button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./styles.scss";

export const LeftBar = () => {
  const mockData = useSelector((state: RootState) => state.sales.data)[0];
  return (
    <>
      <div className="left-container">
        <Image
          url={mockData.image}
          title={mockData.title}
          subtitle={mockData.subtitle}
        ></Image>
        <div className="button-tab">
          {mockData.tags.map((tag, index) => (
            <Button label={tag} key={index}></Button>
          ))}
        </div>
      </div>
    </>
  );
};
