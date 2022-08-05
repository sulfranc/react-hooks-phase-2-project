import { useState,useEffect } from "react";


function RandomJoke() {
    const [jokes,setJokes] = useState([])
    const [jokeElem,setJokeElem] = useState([])
    
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
            console.log(jokeElem.id)
            console.log(jokeElem.joke)
           
            
       }
    return (
        <>
            <h2>RandomJoke</h2>
            <button onClick={getRandomJoke}>Get Random Joke</button>
            <h3>{jokeElem.joke}</h3>             
            

        </>
    )
    
}

export default RandomJoke