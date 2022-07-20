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
            <NavLink  to="/about">
            <h1>About</h1>
            </NavLink>
            <NavLink  to="/think">
            <h1>Think</h1>
            </NavLink>
      </div>
    )
}

export default NavBar