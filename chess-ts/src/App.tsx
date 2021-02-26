import React from "react";
import "./App.css";
// components
import Chessboard from 'chessboardjsx'
import { NavComponent } from './components/NavComponent'
const Chess = require("chess.js");

// logic that controls the width of the gameboard based on the width of the viewport
// I had to do it this way because chessboardjsx doesn't respond to css width
let gameboardWidthLogic: number;
const vw: number = window.innerWidth;
const vh: number = window.innerHeight;
if(vw>vh) { // horizontal displays
    if (vw < 2000 && vw > 1601) { 
        gameboardWidthLogic = vw / 2 - 100;
    } else if (vw < 1600 && vw > 1201) { 
        gameboardWidthLogic = vw / 2 ;
    } else if (vw < 1200 && vw > 1001) { 
        gameboardWidthLogic = vw / 2 - 30;
    } else if (vw < 1000 && vw > 801) { 
        gameboardWidthLogic = vw / 2 + 50;
    } else if (vw < 800 && vw > 501) { 
        gameboardWidthLogic = vw / 2;
    } else {
        gameboardWidthLogic = vw / 2;
    }
} else if(vh>vw) { // vertical displays
    if (vw < 700 && vw > 601) {
        gameboardWidthLogic = vw - (vw / 10)
    } else if (vw < 600 && vw > 501) {
        gameboardWidthLogic = vw - (vw / 15)
    } else if (vw < 500 && vw > 401) {
        gameboardWidthLogic = vw - (vw / 20)
    } else if (vw < 400 && vw > 301) {
        gameboardWidthLogic = vw - (vw / 25)
    } else if (vw < 300) {
        gameboardWidthLogic = vw - (vw / 30)
    }
}

const  App:React.FC = () => {
  // const chess: any = new Chess();
  console.log(window.innerWidth);
  return (
    <main className="App">
      <NavComponent />
      <Chessboard
        position='start'
        width={gameboardWidthLogic}
      />
      
    </main>
  );
}

export default App;
