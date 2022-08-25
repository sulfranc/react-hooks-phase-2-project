import Home from "./Home";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import CreateJoke from "./CreateJoke";
import RandomJoke from "./RandomJoke";
import React, { useEffect, useState } from "react";







function App() {
  const [jokes, setJokes] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/Jokes")
      .then((r) => r.json())
      .then(setJokes);
  }, [])

  function handleAddJoke(newJokes) {
    setJokes([...jokes, newJokes]);
  }



  return (
    

      <div className="page">
        
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />}/>
          <Route path="createjoke" element={<CreateJoke onAddJoke ={handleAddJoke} />} />
          <Route path="randomjoke" element={<RandomJoke />} />
        </Routes>
      

      </div>
    
    
  );
}

export default App;
