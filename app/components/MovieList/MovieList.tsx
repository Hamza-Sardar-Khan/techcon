import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import OMDbMovie from './../../types/OMDbMovie';
import MovieCard from '../MovieCard/MovieCard';

interface MovieListProps {
    movieTitles: string[];
    selectedGenre: string[];
    searchQuery: string; 
}

const MovieList: FC<MovieListProps> = ({ movieTitles, selectedGenre, searchQuery }) => {
    const [movies, setMovies] = useState<OMDbMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setMovies([]);
        setLoading(true); 

        const fetchMovies = async () => {
            try {
                const apiKey = '40e20a4a'; // Replace with your OMDb API key
                const moviePromises = movieTitles.map((title) =>
                    axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
                );
                const movieResponses = await Promise.all(moviePromises);
                const fetchedMovies = movieResponses
                    .map((response) => response.data)
                    .filter((movie) => movie.Response === 'True');  // Filter successful responses

                let filteredMovies = fetchedMovies;

                if (selectedGenre.length > 0) {
                    filteredMovies = filteredMovies.filter((movie) =>
                        selectedGenre.some((genre) => movie.Genre.includes(genre))
                    );
                }

                if (searchQuery) {
                    filteredMovies = filteredMovies.filter((movie) => {
                        const movieTitle = movie.Title.toLowerCase();
                        const searchTerm = searchQuery.toLowerCase().trim();  // Trim spaces for cleaner match
                        // Exact match or starts with logic
                        return movieTitle === searchTerm || movieTitle.startsWith(searchTerm);
                    });
                }

                setMovies(filteredMovies);
            } catch (err) {
                console.error('Error fetching movies:', err);
            } finally {
                setLoading(false);  // Set loading to false once data is fetched
            }
        };

        if (movieTitles.length > 0) {
            fetchMovies();
        } else {
            setLoading(false); // If no movie titles, stop loading immediately
        }
    }, [movieTitles, selectedGenre, searchQuery]);  // Re-run when these change

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid w-16 h-16"></div>
        </div>
    );

    if (movies.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen text-gray-500">
                <p>No movies found for the given search and genre filters.</p>
            </div>
        );
    }

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
    