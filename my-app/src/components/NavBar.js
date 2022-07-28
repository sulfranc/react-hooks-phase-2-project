import { NavLink } from "react-router-dom"

function NavBar(){
    return (
        <div className="ms-auto"
            style={{
            borderBottom: "4px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
            
                                    
            }}
        >
            
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
    )
}

export default NavBar