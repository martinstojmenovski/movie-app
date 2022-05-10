import {useState} from 'react'
import './App.css';

const apiKey = '4f7e92fe'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    .then (response => response.json())
    .then(data => console.log(data))
    .catch(() => console.log('error'))
  }

  return (
    <div className="App">
      <h1>OMDb MOVIE APP</h1>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="Movie Title"/>
        <input type="submit" value="Find Movie Info"/>
      </form>
    </div>
  );
}

export default App;



// import {useState} from 'react'
// import './App.css';

// const apiKey = "55b7d8f5"

// function App() {
//   const [searchTerm, setSearchTerm] = useState("")
  
//   const updateSearchTerm = (event) => {
//     setSearchTerm(event.target.value)
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(()=> console.log('error'))
//   }
//   return (
//     <div className="App">
//       <h1>OMDb MOVIE APP</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="Movie Title"/>
//         <input type="submit" value="Find Movie Info" />
//       </form>
//     </div>
//   );
// }

// export default App