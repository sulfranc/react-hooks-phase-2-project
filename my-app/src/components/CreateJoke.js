import { useState } from "react";
import React from "react";


function CreateJoke({onAddJoke}){
    const [formData,setFormData] = useState({
        joke:"",
        answer:""

    })


      function handleJokeChange(e){
          setFormData({
            ...formData,
            [e.target.name] : e.target.value
          })
          
          

      }
   
    
    function handleSubmit(e){
       e.preventDefault()
       const newJoke = {
           ...formData
       }
      formData.joke = ''
      formData.answer = ''
       
        console.log(formData)
        fetch('http://localhost:3000/Jokes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json', },
        body: JSON.stringify(newJoke),
        })
        .then((resp) => 
           {
          console.log(resp)
          console.log(newJoke)
          return resp.json()}
        )
        .then(onAddJoke)
        .catch((error)=>console.log(error))
        
        
        }
    

    return(
        
        <div class="text-center" color="blue">
            <div class= 'container-fluid'>

            </div>
            <h2>CreateJoke</h2>
            <form onSubmit={handleSubmit}>
                
                <label>
                    Joke:
                    <input
                    type="text"
                    name="joke"
                    value={formData.joke}
                    onChange = {handleJokeChange}                />
                </label>
                <label>
                    Answer:
                    <input
                    type="text"
                    name="answer"
                    value={formData.answer}
                    onChange = {handleJokeChange}
                    />
                </label>
                <br/>
                <br/>
                <input
                type="submit"
                name="submit"
                value="Create new joke"
                className="submit"
                class = 'btn btn-primary'
                
                />
            

                
            </form>
        
        </div>
        
    )
}

export default CreateJoke