import { useState,useEffect } from "react";


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
            console.log(jokeElem.id)
            console.log(jokeElem.joke)
            console.log(jokeElem.answer)
           
            
       }
    return (
        <>
            <h2>RandomJoke</h2>
            <button onClick={getRandomJoke}>Get Random Joke</button>
            <h3>{jokeElem.joke}</h3>
            <button onClick={() => setShowText(!showText)}>Get Answer</button> 
            {showText && <h3>{jokeElem.answer}</h3>}            
            

        </>
    )
    
}

export default RandomJoke