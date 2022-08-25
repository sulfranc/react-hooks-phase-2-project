import { NavLink } from "react-router-dom"
import React from "react";


function NavBar(){
    return (
        <div class="navbar navbar-dark bg-dark">
            <div class = "container">
                <NavLink  to="/home">
                <h1>Home</h1>
                </NavLink>
                <NavLink  to="/randomjoke">
                <h1>Random Joke</h1>
                </NavLink>
                <NavLink  to="/createjoke">
                <h1>Create Joke</h1>
                </NavLink>
            </div>
            
           
      </div>
    )
}

export default NavBar