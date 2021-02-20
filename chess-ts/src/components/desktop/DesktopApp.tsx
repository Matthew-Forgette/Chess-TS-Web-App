import React from 'react'
import './Desktop.css'
import Chessboard from 'chessboardjsx'
import { NavComponent } from '../NavComponent'


export const DesktopApp = () => {
    return (
        <div className='desktop-app'>
            <h1>DESKTOP</h1>
            <NavComponent />
            {/* <Chessboard /> */}
        </div>
    )
}
