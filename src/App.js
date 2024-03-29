import './App.css';
import Layout from './components/layout';
import FullTvMovieSection from './pages/singleFullTvMovieSection';
import { Routes, Route } from 'react-router-dom';

let TVinformation = [
  [  
      {
          path: "/assets/nowPlayingMovies/1.webp",
          title: "Law & Order"
      },
      {
          path: "/assets/nowPlayingMovies/2.webp",
          title: "Tagesschau"
      }
      ,
      {
          path: "/assets/popularTvshows/3.webp",
          title: "The Simpsons"
      },
      {
          path: "/assets/popularTvshows/4.webp",
          title: "Elas por Elas"
      },
      {
          path: "/assets/popularTvshows/5.webp",
          title: "Tommorow is Ours"
      },
      {
          path: "/assets/popularTvshows/6.webp",
          title: "Ammerican Dad!"
      },
      {
          path: "/assets/popularTvshows/7.webp",
          title: "The Queen of News"
      },
      {
          path: "/assets/popularTvshows/8.webp",
          title: "Senior High"
      },
      {
          path: "/assets/popularTvshows/9.webp",
          title: "Gran hermano"
      },
      {
          path: "/assets/popularTvshows/10.webp",
          title: "Grey's Anatomy"
      },
      {
          path: "/assets/popularTvshows/11.webp",
          title: "Chronicles of the Sun"
      },
      {
          path: "/assets/popularTvshows/12.webp",
          title: "The Elegant Empire"
      },
      {
          path: "/assets/popularTvshows/13.webp",
          title: "Unpredictable Family"
      },
      {
          path: "/assets/popularTvshows/14.webp",
          title: "Minas de Pasión"
      },
      {
          path: "/assets/popularTvshows/15.webp",
          title: "Beverly Hills, 90210"
      },
      {
          path: "/assets/popularTvshows/16.webp",
          title: "Gran hermano VIP"
      },
      {
          path: "/assets/popularTvshows/17.webp",
          title: "Binnelanders"
      },
      {
          path: "/assets/popularTvshows/18.webp",
          title: "Operación triunfo"
      },
    
      {
          path: "/assets/popularTvshows/19.webp",
          title: "Ulice"
      },
      {
          path: "/assets/popularTvshows/20.webp",
          title: "Great Minds"
      },
   
  ], // popular Tv shows
  [  
      {
          path: "/assets/popularTvshows/1.webp",
          title: "Law & Order"
      },
      {
          path: "/assets/popularTvshows/2.webp",
          title: "Tagesschau"
      }
      ,
      {
          path: "/assets/popularTvshows/3.webp",
          title: "The Simpsons"
      },
      {
          path: "/assets/popularTvshows/4.webp",
          title: "Elas por Elas"
      },
      {
          path: "/assets/popularTvshows/5.webp",
          title: "Tommorow is Ours"
      },
      {
          path: "/assets/popularTvshows/6.webp",
          title: "Ammerican Dad!"
      },
      {
          path: "/assets/popularTvshows/7.webp",
          title: "The Queen of News"
      },
      {
          path: "/assets/popularTvshows/8.webp",
          title: "Senior High"
      },
      {
          path: "/assets/popularTvshows/9.webp",
          title: "Gran hermano"
      },
      {
          path: "/assets/popularTvshows/10.webp",
          title: "Grey's Anatomy"
      },
      {
          path: "/assets/popularTvshows/11.webp",
          title: "Chronicles of the Sun"
      },
      {
          path: "/assets/popularTvshows/12.webp",
          title: "The Elegant Empire"
      },
      {
          path: "/assets/popularTvshows/13.webp",
          title: "Unpredictable Family"
      },
      {
          path: "/assets/popularTvshows/14.webp",
          title: "Minas de Pasión"
      },
      {
          path: "/assets/popularTvshows/15.webp",
          title: "Beverly Hills, 90210"
      },
      {
          path: "/assets/popularTvshows/16.webp",
          title: "Gran hermano VIP"
      },
      {
          path: "/assets/popularTvshows/17.webp",
          title: "Binnelanders"
      },
      {
          path: "/assets/popularTvshows/18.webp",
          title: "Operación triunfo"
      },
    
      {
          path: "/assets/popularTvshows/19.webp",
          title: "Ulice"
      },
      {
          path: "/assets/popularTvshows/20.webp",
          title: "Great Minds"
      },
   
  ],// [], // top rated Tv shows
  [  
      {
          path: "/assets/popularTvshows/1.webp",
          title: "Law & Order"
      },
      {
          path: "/assets/popularTvshows/2.webp",
          title: "Tagesschau"
      }
      ,
      {
          path: "/assets/popularTvshows/3.webp",
          title: "The Simpsons"
      },
      {
          path: "/assets/popularTvshows/4.webp",
          title: "Elas por Elas"
      },
      {
          path: "/assets/popularTvshows/5.webp",
          title: "Tommorow is Ours"
      },
      {
          path: "/assets/popularTvshows/6.webp",
          title: "Ammerican Dad!"
      },
      {
          path: "/assets/popularTvshows/7.webp",
          title: "The Queen of News"
      },
      {
          path: "/assets/popularTvshows/8.webp",
          title: "Senior High"
      },
      {
          path: "/assets/popularTvshows/9.webp",
          title: "Gran hermano"
      },
      {
          path: "/assets/popularTvshows/10.webp",
          title: "Grey's Anatomy"
      },
      {
          path: "/assets/popularTvshows/11.webp",
          title: "Chronicles of the Sun"
      },
      {
          path: "/assets/popularTvshows/12.webp",
          title: "The Elegant Empire"
      },
      {
          path: "/assets/popularTvshows/13.webp",
          title: "Unpredictable Family"
      },
      {
          path: "/assets/popularTvshows/14.webp",
          title: "Minas de Pasión"
      },
      {
          path: "/assets/popularTvshows/15.webp",
          title: "Beverly Hills, 90210"
      },
      {
          path: "/assets/popularTvshows/16.webp",
          title: "Gran hermano VIP"
      },
      {
          path: "/assets/popularTvshows/17.webp",
          title: "Binnelanders"
      },
      {
          path: "/assets/popularTvshows/18.webp",
          title: "Operación triunfo"
      },
    
      {
          path: "/assets/popularTvshows/19.webp",
          title: "Ulice"
      },
      {
          path: "/assets/popularTvshows/20.webp",
          title: "Great Minds"
      },
   
  ],// []  // airing today
]

let Moviesinformation = [
  [  
      {
          path: "/assets/popularMovies/1.webp",
          title: "Killers of the Flower Moon"
      },
      {
          path: "/assets/popularMovies/2.webp",
          title: "Freelance"
      }
      ,
      {
          path: "/assets/popularMovies/3.webp",
          title: "A Man of Reason"
      },
      {
          path: "/assets/popularMovies/4.webp",
          title: "Leave the World Behind"
      },
      {
          path: "/assets/popularMovies/5.webp",
          title: "Wonka"
      },
      {
          path: "/assets/popularMovies/6.webp",
          title: "Trolls Band Together"
      },
      {
          path: "/assets/popularMovies/7.webp",
          title: "Leo"
      },
      {
          path: "/assets/popularMovies/8.webp",
          title: "Oppenheimer"
      },
      {
          path: "/assets/popularMovies/9.webp",
          title: "Good Boy"
      },
      {
          path: "/assets/popularMovies/10.webp",
          title: "The Dark Kingdom"
      },
      {
          path: "/assets/popularMovies/11.webp",
          title: "Mount Adams"
      },
      {
          path: "/assets/popularMovies/12.webp",
          title: "Shockwave: Countdown to Disaster"
      },
      {
          path: "/assets/popularMovies/13.webp",
          title: "Rumble Through the Dark"
      },
      {
          path: "/assets/popularMovies/14.webp",
          title: "Fast Charlie"
      },
      {
          path: "/assets/popularMovies/15.webp",
          title: "Five Nights at Freddy's"
      },
      {
          path: "/assets/popularMovies/16.webp",
          title: "Wifelike"
      },
      {
          path: "/assets/popularMovies/17.webp",
          title: "The Creator"
      },
      {
          path: "/assets/popularMovies/18.webp",
          title: "Fast X"
      },
    
      {
          path: "/assets/popularMovies/19.webp",
          title: "Christmas Bloody Christmas"
      },
      {
          path: "/assets/popularMovies/20.webp",
          title: "Krampus"
      },
   
  ], // popular movies
  [  
      {
          path: "/assets/topRatedMovies/1.webp",
          title: "The Godfather"
      },
      {
          path: "/assets/topRatedMovies/2.webp",
          title: "The Shawshank Redemption"
      }
      ,
      {
          path: "/assets/topRatedMovies/3.webp",
          title: "The Godfather Part II"
      },
      {
          path: "/assets/topRatedMovies/4.webp",
          title: "Schindler's List"
      },
      {
          path: "/assets/topRatedMovies/5.webp",
          title: "Dilwale Dulhania Le Jayenge"
      },
      {
          path: "/assets/topRatedMovies/6.webp",
          title: "12 Angry Men"
      },
      {
          path: "/assets/topRatedMovies/7.webp",
          title: "Spirited Away"
      },
      {
          path: "/assets/topRatedMovies/8.webp",
          title: "Parasite"
      },
      {
          path: "/assets/topRatedMovies/9.webp",
          title: "The Dark Knight"
      },
      {
          path: "/assets/topRatedMovies/10.webp",
          title: "The Green Mile"
      },
      {
          path: "/assets/topRatedMovies/11.webp",
          title: "Your Name"
      },
      {
          path: "/assets/topRatedMovies/12.webp",
          title: "Pulp fiction"
      },
      {
          path: "/assets/topRatedMovies/13.webp",
          title: "The Lord of the Rings: The Return of the King"
      },
      {
          path: "/assets/topRatedMovies/14.webp",
          title: "Forest Gump"
      },
      {
          path: "/assets/topRatedMovies/15.webp",
          title: "The Good the Bad and the Ugly"
      },
      {
          path: "/assets/topRatedMovies/16.webp",
          title: "GoodFellas"
      },
      {
          path: "/assets/topRatedMovies/17.webp",
          title: "Grave of the Fireflies"
      },
      {
          path: "/assets/topRatedMovies/18.webp",
          title: "Life is Beautiful"
      },
    
      {
          path: "/assets/topRatedMovies/19.webp",
          title: "Seven Samurai"
      },
      {
          path: "/assets/topRatedMovies/20.webp",
          title: "Cinema Paradiso"
      },
   
  ],// [], // top rated Movies
  [  
      {
          path: "/assets/nowPlayingMovies/1.webp",
          title: "Kilers of the Flower Moon"
      },
      {
          path: "/assets/nowPlayingMovies/2.webp",
          title: "Freelance"
      }
      ,
      {
          path: "/assets/nowPlayingMovies/3.webp",
          title: "Leave the world behind"
      },
      {
          path: "/assets/nowPlayingMovies/4.webp",
          title: "Wonka"
      },
      {
          path: "/assets/nowPlayingMovies/5.webp",
          title: "Trolls Band Together"
      },
      {
          path: "/assets/nowPlayingMovies/6.webp",
          title: "Leo"
      },
      {
          path: "/assets/nowPlayingMovies/7.webp",
          title: "Fast Charlie"
      },
      {
          path: "/assets/nowPlayingMovies/8.webp",
          title: "Five Nights at Freddy's"
      },
      {
          path: "/assets/nowPlayingMovies/9.webp",
          title: "Merry Little Batman"
      },
      {
          path: "/assets/nowPlayingMovies/10.webp",
          title: "Diary of a Wimpy Kid Christmas: Cabin Fever"
      },
      {
          path: "/assets/nowPlayingMovies/11.webp",
          title: "The Hunger Games: The Ballad of Songbirds & Snakes"
      },
      {
          path: "/assets/nowPlayingMovies/12.webp",
          title: "Aquaman and the Lost Kingdom"
      },
      {
          path: "/assets/nowPlayingMovies/13.webp",
          title: "The Marveles"
      },
      {
          path: "/assets/nowPlayingMovies/14.webp",
          title: "Godzilla Minus One"
      },
      {
          path: "/assets/nowPlayingMovies/15.webp",
          title: "Digimon Adventure 02: The Beginning"
      },
      {
          path: "/assets/nowPlayingMovies/16.webp",
          title: "The Bad Guys: A Very Bad Holiday"
      },
      {
          path: "/assets/nowPlayingMovies/17.webp",
          title: "PAW Patrol: The Mighty Movie"
      },
      {
          path: "/assets/nowPlayingMovies/18.webp",
          title: "Wish"
      },
    
      {
          path: "/assets/nowPlayingMovies/19.webp",
          title: "Napolean"
      },
      {
          path: "/assets/nowPlayingMovies/20.webp",
          title: "Saw X"
      },
   
  ],// []  // airing today
]



let TVheadings = ["Popular TV Shows", "Top Rated TV Shows", "Airing Today"]
let Moviesheadings = ["Popular Movies", "Top Rated Movies", "Playing Today"]

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
