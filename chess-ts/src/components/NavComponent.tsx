import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import { navList } from './NavList';
import { SingleNavLink } from './SingleNavLink';


interface NavListItem {
    name: string,
    path: string,
    image?: string,
    alt?: string,
    icon?: JSX.Element
}


export const NavComponent = () => {

    return (
        <Router>
            <div className='nav-d nav-t nav-m'> 
            {/*three class names to avoid style overlaps for components */}

                {navList.map((item: NavListItem, index: number) => {
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
