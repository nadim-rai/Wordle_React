function GuessInput(){
    return(
        <form className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input type="text" id="guess-input" />
        </form>
    )
}
export default GuessInput;