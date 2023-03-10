import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.scss'

export default function Search() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    setMovies(data.results)
  }
  

  useEffect(() => {
    console.log('use effect foi chamado')
    
    const searchWithQueryURL = `${searchURL}${apiKey}&query=${query}&language=pt-BR`
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    
    getSearchMovies(searchWithQueryURL)
  }, [query])


  return (
    <div className='container'>
      <h2 className='titlePag'>Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}
