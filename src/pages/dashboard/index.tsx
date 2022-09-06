import React from "react";
import useFetch from "../../utils/useFetch";
import { LeftBar } from "./components/LeftBar";
import { RightContent } from "./components/RightContent";
import Header from "../../components/header/Header";
import "./styles.scss";

const Dashboard = () => {
  useFetch();
  return (
    <div className="dashboard">
      <Header></Header>
      <div className="main-container">
        <LeftBar></LeftBar>
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default Dashboard;
