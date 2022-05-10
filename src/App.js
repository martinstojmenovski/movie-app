import {useState} from 'react'
import './App.css';

// api key to omdb api
const apiKey = "55b7d8f5"

// app component
function App() {
  // state for input search term
  const [searchTerm, setSearchTerm] = useState("")
  // state for movie data from api
  const [movie, setMovie] = useState(null)
  // state for message to user
  const [message, setMessage] = useState("")

  // update searchTerm in state based on input field value
  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }
  // make ajax request for search term and display data
  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault()
    // make ajax request for search term with api key
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      // convert response to javascript object
      .then(response => response.json())
      // data from api as javascript object
      .then(data => {
        // reset searchTerm to empty
        setSearchTerm('')
        // if the API did not find a movie
        if (data.Error) {
          // display error message to user
          setMessage(data.Error)
          // reset movie to null
          setMovie(null)
        // otherwise api found movie
        } else {
          // set movie to api's movie data
          setMovie(data)
          // set message to empty
          setMessage('')
        }
      })
      // if api errors upon request
      .catch(()=> setMessage('Error, sorry try again'))
  }

  // build movie display jsx if there is a movie in state
  let movieDisplay = ""
  if (movie !== null) {
    movieDisplay = (
      <div>
        <h2>Title: {movie.Title}</h2>
        <h3>Year: {movie.Year}</h3>
        <img src={movie.Poster} alt={movie.Title}/>
        <h4>Genre: {movie.Genre}</h4>
        <h5>Plot: {movie.Plot}</h5>
      </div>
    )
  }

  // render form with handlesubmit and input with value bound to state
  // display movie and message
  return (
    <div className="App">
      <h1>OMDb MOVIE APP</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="Movie Title"/>
        <input type="submit" value="Find Movie Info" />
      </form>
      <p>{message}</p>
      {movieDisplay}
    </div>
  );
}

export default App;