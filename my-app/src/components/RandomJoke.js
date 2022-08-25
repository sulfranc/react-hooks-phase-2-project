import { useState,useEffect } from "react";
import React from "react";

function RandomJoke() {
    const [jokes,setJokes] = useState([])
    const [jokeElem,setJokeElem] = useState([])
    const [showText, setShowText] = useState(false)
    
    useEffect(()=>{
        fetch("http://localhost:3000/Jokes")
            .then(resp => resp.json())
            .then(data => setJokes(data))            
            .catch(console.error())

            

    },[]
    )
        
        function getRandomJoke(){
            
            console.log(jokes)
            setJokeElem(jokes[Math.floor(Math.random() * jokes.length)])
            console.log(jokeElem.joke)
            console.log(jokeElem.answer)
           
            
       }
    return (
        <div class="text-center">
            <h2>RandomJoke</h2>
            <button onClick={getRandomJoke}>Get Random Joke</button>
            <h3>{jokeElem.joke}</h3>
            <button onClick={() => setShowText(!showText)}>Get Answer</button> 
            {showText && <h3>{jokeElem.answer}</h3>}   
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7avbs2X741wgaTElDsGG3rCDoeqyB6CkBg&usqp=CAU" width ='50%' height='60%'/>  
            </div>
                 
            

        </div>
    )
    
}

export default RandomJoke