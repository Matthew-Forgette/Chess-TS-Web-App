import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import { navList } from './NavList';
import { SingleNavLink } from './SingleNavLink';



export const NavComponent = () => {

    return (
        <Router>
            <div className='nav'>

                {navList.map((item: any, index: number) => {
                    return (
                        <SingleNavLink {...item} key={index}/>
                    )
                })}

                <Switch>
                    <Route>

                    </Route>
                    <Route>
                        
                    </Route>
                    <Route>
                        
                    </Route>
                    <Route>
                        
                    </Route>
                    <Route path='/' exact>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
