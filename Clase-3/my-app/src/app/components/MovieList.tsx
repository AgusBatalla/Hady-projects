import { Movie } from '../../types';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-center text-gray-200 mb-2">{movie.Title}</h2>
            <p className="text-gray-400 text-center">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
