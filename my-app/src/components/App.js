import Home from "./Home";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import CreateJoke from "./CreateJoke";
import RandomJoke from "./RandomJoke";






function App() {
  return (

      <div>
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />}/>
          <Route path="createjoke" element={<CreateJoke />} />
          <Route path="randomjoke" element={<RandomJoke />} />
        </Routes>
      

      </div>
    
    
  );
}

export default App;
