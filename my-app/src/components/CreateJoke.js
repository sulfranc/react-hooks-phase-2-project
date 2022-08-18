import { useState } from "react";


function CreateJoke(){
    const [data,setNewData] = useState({
        joke:"",
        answer:""

    })


      function handleJokeChange(e){
          const newData = {...data}
          newData[e.target.id] = e.target.value
          setNewData(newData)
          console.log(newData)

      }
   
    
    function handleSubmit(e){
       e.preventDefault()
       
    //    const data = { username: 'example' };

    //     fetch('https://example.com/profile', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

        console.log(data)
        fetch('http://localhost:3000/Jokes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json', },
        body: JSON.stringify(data)
        })
        .then((resp)=> {
            console.log(resp)
           return resp.json()})
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
        }
    

    return(
        <>
        <h2>CreateJoke</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Joke:
                <input
                id="joke"
                type="text"
                name="joke"
                value={data.joke}
                onChange = {handleJokeChange}                />
            </label>
            <label>
                Answer:
                <input
                id="answer"
                type="text"
                name="answer"
                value={data.answer}
                onChange = {handleJokeChange}
                />
            </label>
            <button type="submit">Add Joke</button>

            
        </form>
        
        </>
        
    )
}

export default CreateJoke