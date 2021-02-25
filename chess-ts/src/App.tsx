import React from "react";
import "./App.css";
// components
import { MobileApp, TabletApp, DesktopApp } from "./components";
const Chess = require("chess.js");

const  App:React.FC = () => {
  // const chess: any = new Chess();
  console.log(window.innerWidth);
  return (
    <main className="App">
      <DesktopApp  />
      {/* ternary designed to render specific components based on viewport width. I did it this way because the chessboardjsx library only allows you to adjust the size of the board with the width prop. this allows me to customize each component based on its relationship to the viewport size */}
      {/* {window.innerWidth < 768 ? (
        <MobileApp />
      ) : window.innerWidth > 760 && window.innerWidth < 1024 ? (
        <TabletApp />
      ) : (
        <DesktopApp />
      )} */}
    </main>
  );
}

export default App;
