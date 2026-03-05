import React from "react";

function GuessInput({handleSubmitGuess}){
    const [tentativeGuess, setTentativeGuess] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log({tentativeGuess})
        handleSubmitGuess(tentativeGuess)
        setTentativeGuess('');
    }
    return(
        <form onSubmit={handleSubmit}className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                required
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                type="text" 
                id="guess-input" 
                value={tentativeGuess}
                onChange={(event) =>{
                    const nextGuess = event.target.value.toUpperCase();
                    setTentativeGuess(nextGuess)
                }}
            />
        </form>
    )
}
export default GuessInput;