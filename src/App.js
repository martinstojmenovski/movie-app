import {useState} from 'react'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="App">
      <h1>OMDb MOVIE APP</h1>
      <form>
        <label>Title: </label>
        <input on Change={updateSearchTerm} value={searchTerm} placeholder="Movie Title" />
        <input type="submit" value="Find Movie Info"/>
      </form>
    </div>
  );
}

export default App;
