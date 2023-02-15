import React, { useState, useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import MovieCard from "../components/movies-cards/Card";
import LogoSite from '../components/navigation/logo'
import { Grid} from 'semantic-ui-react'
import './Catalog.scss'
import Filters from "../components/filters/Filters";
import PaginationCard from "../components/pagination/Pagination";


export default function Catalog() {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [selectedgenre, setSelectedgenre] = useState(null)
  const [activepage, setActivepage] = useState()

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=93d53087ea06d9fde3aa8d5701ac1c0a&language=fr-FR&page=1"
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => setMovies(data.results))

  }, [])

  const handlerPage = async (e) => {
   // e.preventDefault()
    console.log('yes')
    try {
      const API_PAGE= `https://api.themoviedb.org/3/movie/popular?api_key=93d53087ea06d9fde3aa8d5701ac1c0a&language=fr-FR&page=${activepage}`
      const res = await fetch(API_PAGE)
      const data = await res.json()
      console.log(data)
      setMovies(data.results)

    } catch (e) {
      console.log(e)
    }
  }
console.log(activepage)
  const searchMovie = async (e) => {
    e.preventDefault()
    if (query === '') return setMovies
    try {
      const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=93d53087ea06d9fde3aa8d5701ac1c0a&language=fr-FR&include_adult=false&query=${query}`
      const res = await fetch(API_SEARCH)
      const data = await res.json()
      console.log(data)
      setMovies(data.results)

    } catch (e) {
      console.log(e)
    }
  }
  const handlerChange = (e) => {
    setQuery(e.target.value)
  }


  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          {/* <div className="filter-zone">
            <Filters selectedgenre={selectedgenre} setSelectedgenre={setSelectedgenre} />
          </div> */}
        </Grid.Column>
        <Grid.Column width={12}>

          <div className="container">
            <LogoSite />
            <NavBar searchMovie={searchMovie} query={query} handlerChange={handlerChange} />
            <div>
              <h2>FILMS LES PLUS POPULAIRES</h2>

            </div>
            <div className="cards-show">
              {
                movies
                  //.filter((movie) => movie.genre_ids.includes(parseInt(selectedgenre)))
                  .map((movie) =>
                    <MovieCard key={movie.id} {...movie} />
                  )
              }
            </div>
            <PaginationCard
            setActivepage={setActivepage}
            handlerPage={handlerPage}
            />
          </div>

        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  );
}
