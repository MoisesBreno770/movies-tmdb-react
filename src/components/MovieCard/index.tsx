import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';
import { MovieCardProps } from "../../interfaces";

const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink = true}: MovieCardProps) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title}  />
            <h2>{movie.title}</h2>
            <p>
                <FaStar></FaStar> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}