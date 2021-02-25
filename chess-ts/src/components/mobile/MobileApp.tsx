import React from 'react'
import { mobileStyles } from './MobileStyles'
import Chessboard from 'chessboardjsx'
import { NavComponent } from '../NavComponent'

export const MobileApp = () => {
    return (
        <div >
            <h1>MOBILE</h1>
            <NavComponent />

            {/* <Chessboard /> */}
        </div>
    )
}
