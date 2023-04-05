import { useState, useEffect } from "react"
import { MovieCard } from "../components/MovieCard";

import './MovieGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url: any) => {
        try {
            const res = await fetch(url);

            const data = await res.json();
            setTopMovies(data.results);
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie: any) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
            </div>
        </div>
    )
}