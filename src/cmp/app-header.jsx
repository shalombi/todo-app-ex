import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../routes'

export const  AppHeader = () => {

    return (
        <header className="app-header">
            <nav>
                {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink> )}
            </nav>
                {/* <NavLink  to={'STAM'}> STAM CMP</NavLink> */}
        </header>
    )
}
