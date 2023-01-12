import { useState, useEffect } from 'react'

import MovieCard from '../components/MovieCard'

import './MoviesGrid.scss'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (topRatedUrl) => {
    const response = await fetch(topRatedUrl)
    const data = await response.json()

    setTopMovies(data.results)
  }
  

  useEffect(() => {
    console.log('use effect foi chamado')
    console.log('Me contrata imply, Juro de coração que me dedicarei, eu visto a camisa da empresa!')
    
    const topRatedUrl = `${moviesURL}top_rated${apiKey}&language=pt-BR`
    getTopRatedMovies(topRatedUrl)
  }, [])

  return ( 
    <div className='container'>
      <h2 className='titlePag'>Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && 
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>

  )
}

//