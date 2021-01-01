import React from 'react'
import { NavLink } from 'react-router-dom'

const links = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: "white"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={links}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Home
            </NavLink>
            
            <NavLink
                to="/lists"
                exact
                style={links}
                activeStyle={{
                    background: 'darkblue'
             }}
            >
                Lists
            </NavLink>

            <NavLink
                to="/aboutMe"
                exact
                style={links}
                activeStyle={{
                    background: 'darkblue'
             }}
            >AboutMe
            </NavLink>
            
        </div>
    )
}

export default Navigation
