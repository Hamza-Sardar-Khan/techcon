import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import OMDbMovie from './../../types/OMDbMovie';
import MovieCard from '../MovieCard/MovieCard';

interface MovieListProps {
    movieTitles: string[];
    selectedGenre: string[];
}

const MovieList: FC<MovieListProps> = ({ movieTitles, selectedGenre }) => {
    const [movies, setMovies] = useState<OMDbMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = '40e20a4a'; // Replace with your OMDb API key
                const moviePromises = movieTitles.map((title) =>
                    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
                );
                const movieResponses = await Promise.all(moviePromises);
                const fetchedMovies = movieResponses
                    .map((response) => response.data)
                    .filter((movie) => movie.Response === 'True');

                // Apply genre filter (if any) after fetching the movies
                const filteredMovies = fetchedMovies.filter(movie =>
                    selectedGenre.length === 0 || selectedGenre.some(genre => movie.Genre.includes(genre))
                );

                setMovies(filteredMovies);
            }  finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [movieTitles, selectedGenre]);

    if (loading) return <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid w-16 h-16"></div>
  </div>;
    if (error) return <div>{error}</div>;

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px',
            }}
        >
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
