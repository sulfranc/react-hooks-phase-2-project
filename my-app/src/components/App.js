import Home from "./Home";
import NavBar from "./NavBar";
import Think from "./Think";
import About from "./RandomJoke";
import { Routes, Route } from "react-router-dom";






function App() {
  return (

      <div>
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />}/>
          <Route path="think" element={<Think />} />
          <Route path="about" element={<About />} />
        </Routes>
      

      </div>
    
    
  );
}

export default App;
