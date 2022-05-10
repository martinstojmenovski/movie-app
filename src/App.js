import {useState} from 'react'
import './App.css';

const apiKey = '4f7e92fe'


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movie, setMovie] = useState(null)


  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    .then (response => response.json())
    .then(data => {
      setMovie(data)
      setSearchTerm("")
    })
    .catch(() => console.log('error'))
  }

  let movieDisplay = ""
  if(movie) {
    movieDisplay = (
      <div>
        <h2>Title: {movie.Title}</h2>
        <h3>Year: {movie.Year}</h3>
        <img src={movie.Poster} alt={movie.Title}/>
        <h4>Genre: {movie.Genre}</h4>
        <h5>Plot: {movie.Plot}</h5>
      </div>
    )
  } else {
    movieDisplay = ""
  }

  return (
    <div className="App">
      <h1>OMDb MOVIE APP</h1>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="Movie Title"/>
        <input type="submit" value="Find Movie Info"/>
      </form>
      {movieDisplay}
    </div>
  );
}

export default App;