import React from 'react'
import './Desktop.css'
import Chessboard from 'chessboardjsx'
import { NavComponent } from '../NavComponent'

// logic that controls the width of the gameboard based on the width of the viewport
// I had to do it this way because chessboardjsx doesn't respond to css width
let gameboardWidthLogic: number;
const vw: number = window.innerWidth;
const vh: number = window.innerHeight;
if (vw < 2000 && vw > 1601) {
    gameboardWidthLogic = vw / 2 - 100;
} else if (vw < 1600) {
    gameboardWidthLogic = vw / 2 ;
} else if (vw < 1200) {
    gameboardWidthLogic = vw / 2;
} else if (vw < 800) {
    gameboardWidthLogic = vw / 2;
} else {
    gameboardWidthLogic = vw / 2;
}

export const DesktopApp = () => {
    return (
        <div className='desktop-app'>
            <h1>DESKTOP</h1>
            <NavComponent />
            <Chessboard 
            showNotation={true}
            position='start'
            width={gameboardWidthLogic}
            />
        </div>
    )
}
