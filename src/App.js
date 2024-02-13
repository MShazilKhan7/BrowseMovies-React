import './App.css';
import Layout from './components/layout';
import FullTvMovieSection from './pages/singleFullTvMovieSection';
import { Routes, Route } from 'react-router-dom';
import data from './json/data.json'

let TVheadings = ["Popular TV Shows", "Top Rated TV Shows", "Airing Today"]
let Moviesheadings = ["Popular Movies", "Top Rated Movies", "Playing Today"]

// 
let {TVinformation} = data;
let {Moviesinformation} = data;



// Call the asynchronous function

function App() {
   
  return (

    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<FullTvMovieSection information={TVinformation} headings={TVheadings} />} />
          <Route path='tvshows/' element={<FullTvMovieSection information={TVinformation} headings={TVheadings}/>} />
          <Route path='movies/' element={<FullTvMovieSection information={Moviesinformation} headings={Moviesheadings}/>} />
        </Route>
      </Routes>
    </>

  )
}

export default App;



