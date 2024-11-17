import React, { useState } from 'react';
import MovieList from './../MovieList/MovieList';
import { FaGun } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { LuTrees } from "react-icons/lu";
import { LiaLaugh } from "react-icons/lia";
import { FaFilm } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCamera } from "react-icons/fa";  
const Movies: React.FC = () => {
    const movieTitles = [
        'Inception', 'The Dark Knight', 'Interstellar', 'The Matrix', 'Pulp Fiction', 
        'Fight Club', 'The Godfather', 'Forrest Gump', 'The Shawshank Redemption', 
        'The Lion King', 'Jurassic Park', 'The Avengers', 'The Social Network', 
        'Titanic', 'Gladiator', 'The Godfather: Part II', 'Star Wars', 'The Empire Strikes Back', 
        'The Return of the King', 'The Silence of the Lambs', 'The Departed', 'The Green Mile', 
        'Goodfellas', 'Shutter Island', 'Whiplash', 'The Prestige', 'Jaws', 'The Terminator', 
        'Scarface', 'Mad Max: Fury Road', 'The Big Lebowski', 'The Usual Suspects', 'American Beauty', 
        'Se7en', 'The Grand Budapest Hotel', 'The Intouchables', 'La La Land', 'The Truman Show', 
        'The Dark Knight Rises', 'Avatar', 'The Lord of the Rings: The Fellowship of the Ring', 
        'Blade Runner 2049', 'The Prestige', 'The Revenant', 'Drive', 'The Wolf of Wall Street', 
        '12 Angry Men', 'Schindler’s List', 'A Clockwork Orange', 'The Shining', 'Back to the Future', 
        'The Godfather Part III', 'Star Wars: A New Hope', 'Star Wars: Return of the Jedi', 
        'Gone with the Wind', 'Casablanca', 'Citizen Kane', 'The Great Gatsby', 'The Imitation Game', 
        'The King\'s Speech', 'The Hunger Games', 'The Maze Runner', 'The Martian', 'Gravity', 
        'Whiplash', 'The Dark Knight Returns', 'The Secret Life of Walter Mitty', 'The Princess Bride', 
        'The Incredibles', 'Frozen', 'The Lion King', 'Shrek', 'Toy Story', 'Finding Nemo', 
        'The Little Mermaid', 'Ratatouille', 'Monsters Inc.', 'WALL-E', 'Up', 'Big Hero 6', 
        'Zootopia', 'Kung Fu Panda', 'The Croods', 'Moana', 'Coco', 'Inside Out', 'The Jungle Book', 
        'A Beautiful Mind', 'The Social Network', 'The Theory of Everything', 'Memento', 'Lost in Translation', 
        'Her', 'The Artist', 'Black Swan', 'The Grand Budapest Hotel', 'Birdman', 'Moonlight', 
        'Parasite', 'The Favourite', 'La La Land', 'Lady Bird', 'Manchester by the Sea', 'The Revenant', 
        'Ex Machina', 'The Matrix Reloaded', 'The Matrix Revolutions', 'Lord of the Rings: The Two Towers', 
        'Lord of the Rings: The Return of the King', 'Batman Begins', 'Spider-Man: No Way Home', 'Thor: Ragnarok', 
        'Guardians of the Galaxy', 'Iron Man', 'Captain America: Civil War', 'Wonder Woman', 'Black Panther', 
        'Avengers: Endgame', 'Spider-Man: Into the Spider-Verse', 'Logan', 'Deadpool', 'Deadpool 2', 
        'Joker', 'Venom', 'Aquaman', 'Shazam!', 'Fantastic Beasts and Where to Find Them', 
        'The Hobbit: An Unexpected Journey', 'The Hobbit: The Desolation of Smaug', 'The Hobbit: The Battle of the Five Armies'
    ];
    

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedGenre, setSelectedGenre] = useState<string[]>([]); // Store selected genres

    // Genre click handler
    const handleGenreClick = (genre: string) => {
        setSelectedGenre((prev) => {
            if (prev.includes(genre)) {
                return prev.filter(item => item !== genre); // Remove if already selected
            }
            return [...prev, genre]; // Add to selected genres
        });
    };

    // Filter movie titles based on the search query
    const filteredMovies = movieTitles.filter((movie) =>
        movie.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 sticky h-full left-0 top-0 z-20 bg-gray-50 border-r border-gray-200 pt-20 hidden sm:block">
                <div className="py-4 px-6">
                    <a href="/">
                        <svg className="w-full h-10" viewBox="0 0 69 40">
                            <path fill="#34D186" fillRule="evenodd" d="M55.26 0v30.07h-7.13V1.5L55.26 0ZM34.94 32.92a3.55 3.55 0 0 1 3.57 3.54c0 1.96-1.6 3.54-3.57 3.54a3.55 3.55 0 0 1-3.56-3.54c0-1.95 1.6-3.54 3.56-3.54Zm0-24.38c6.08 0 11.02 4.89 11.02 10.92s-4.94 10.92-11.02 10.92a10.96 10.96 0 0 1-11-10.92c0-6.03 4.93-10.92 11-10.92Zm0 14.46a3.55 3.55 0 0 0 3.57-3.54c0-1.96-1.6-3.54-3.57-3.54a3.55 3.55 0 0 0-3.56 3.54c0 1.96 1.6 3.54 3.56 3.54ZM12.5 23c1.23 0 2.23-1 2.23-2.21 0-1.22-1-2.22-2.23-2.22H7.15V23h5.35ZM7.15 7.08v4.42h3.96c1.23 0 2.23-1 2.23-2.21 0-1.22-1-2.21-2.23-2.21H7.15Zm11.92 7.1a9.19 9.19 0 0 1 2.78 6.6c0 5.14-4.19 9.3-9.36 9.3H0V0h11.1a9.33 9.33 0 0 1 9.37 9.29c0 1.79-.51 3.47-1.4 4.88Zm49.67 1.84h-3.56v5.55c0 1.68.55 2.92 1.97 2.92a6 6 0 0 0 1.6-.2v5.2s-1.48.89-3.48.89h-.09l-.26-.01h-.06l-.13-.01c-3.99-.2-6.7-2.7-6.7-7V5.03l7.14-1.5v5.4h3.57v7.08Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>

                {/* Sidebar genre buttons */}
                <div className="mb-10">
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Comedy')}
                    >
                        <LiaLaugh />
                        <span className="ml-3">Comedy</span>
                    </button>
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Action')}
                    >
                        <FaFilm />
                        <span className="ml-3">Action</span>
                    </button>
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Adventure')}
                    >
                        <LuTrees />
                        <span className="ml-3">Adventure</span>
                    </button>
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Family')}
                    >
                        <MdFamilyRestroom />
                        <span className="ml-3">Family</span>
                    </button>
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Crime')}
                    >
                        <FaGun />
                        <span className="ml-3">Crime</span>
                    </button>
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Mystery')}
                    >
                        <IoMdPerson />
                        <span className="ml-3">Mystery</span>
                    </button>
                    <button
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        onClick={() => handleGenreClick('Drama')}
                    >
                        <FaCamera />
                        <span className="ml-3">Drama</span>
                    </button>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 pt-5">
                <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6 mb-6">
                    {/* Search Form */}
                    <form className="w-full max-w-md">
                        <div className="relative flex items-center text-gray-400 focus-within:text-orange-600">
                            <input
                                className="w-full py-2 pl-9 pr-4 text-sm leading-5 text-gray-500 bg-gray-100 rounded-md focus:outline-none"
                                type="text"
                                placeholder="Search movies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute left-0 pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3a8 8 0 11-8 8 8 8 0 018-8zM21 21l-6-6" />
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Movie List */}
                <MovieList movieTitles={filteredMovies} selectedGenre={selectedGenre}     searchQuery={searchQuery} />
            </div>
        </div>
    );
};

export default Movies;
