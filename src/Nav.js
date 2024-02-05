import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = ({ dogs }) => {
    return (
        <nav>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;