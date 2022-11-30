import Search from "../Search/Search";
import {useEffect, useState} from "react";
import Movie from "../Movie/Movie";

const Movies = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const handleSearch = (term) => {
        setSearch(term)
    }
    console.log(movies.Title)

    useEffect(() => {
            fetch(`https://omdbapi.com/?t=${search}&apikey=e16ebede`)
                .then(response => response.json())
                .then(data => setMovies(data))


        }, [search],
console.log(movies)
    )


    return (
        <div className="container">
            <Search onSearch={handleSearch}/>
            <p>Cia bus filmai</p>
            <Movie
                title = {movies.Title}
                img = {movies.Poster}
                />


        </div>


    )

}

export default Movies