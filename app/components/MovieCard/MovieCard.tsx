import { FC } from 'react';
import ReactStars from 'react-stars'; // Import the react-stars component
import OMDbMovie from './../../types/OMDbMovie';
import { FaCartArrowDown } from "react-icons/fa6";
interface MovieCardProps {
  movie: OMDbMovie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  // Convert imdbRating to a number and use it for the star rating
  const imdbRating = parseFloat(movie.imdbRating);

  return (
    <div
      key={movie.imdbID}
      className="relative bg-white cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
    >
      <div className="relative">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-xs font-semibold">
          {movie.Rated}
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="inline-flex items-center justify-center gap-x-1">
          <h3 className="text-xl font-semibold text-gray-800">{movie.Title}</h3>
          <p className="text-gray-500 text-md">({movie.Year})</p>
        </div>
        <div className="flex justify-center items-center mt-2 space-x-2">
          {/* Render stars based on imdbRating */}
          <ReactStars
            count={5} // Number of stars
            value={imdbRating / 2} // Convert to a 5-star rating scale (IMDb rating is out of 10)
            size={24} // Size of the stars
            color2={'#ffd700'} // Color of the stars (gold)
            edit={false} // Set to false so the stars are read-only (no user interaction)
          />
          <span className="text-lg font-semibold text-gray-700">({movie.imdbRating})</span>
        </div>
      </div>

      {/* Additional movie details */}
      <div className="absolute inset-0 bg-black rounded-xl bg-opacity-80 p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-between">
        <div className="text-white">
          <p className="text-xl font-semibold mb-4 text-center">Details</p>
          <div className="space-y-2 text-sm">
            <p className='text-sm'><strong className='text-md underline'>Released:</strong> {movie.Released}</p>
            <p className='text-sm'><strong className='text-md underline'>Runtime:</strong> {movie.Runtime}</p>
            <p className='text-sm'><strong className='text-md underline'>Genre:</strong> {movie.Genre}</p>
            <p className='text-sm'><strong className='text-md underline'>Director:</strong> {movie.Director}</p>
            <p className='text-sm'><strong className='text-md underline'>Actors:</strong> {movie.Actors}</p>
            <p className='text-sm'><strong className='text-md underline'>Awards:</strong> {movie.Awards}</p>
            <p className='text-sm'><strong className='text-md underline'>Language:</strong> {movie.Language}</p>
            <p className='text-sm'><strong className='text-md underline'>Country:</strong> {movie.Country}</p>
          </div>
        </div>

        <div className="mt-1 w-full items-center justify-center flex relative bottom-8">
              <button className="second-button">
              <FaCartArrowDown />
                  Buy Now
              </button>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-xs bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          <span className="font-semibold">IMDb ID:</span> {movie.imdbID}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
