import React from "react";
import useFetch from "./utils/useFetch";
import Dashboard from "./pages/dashboard";
import "./App.css";

function App() {
  useFetch();
  console.log("app");
  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
