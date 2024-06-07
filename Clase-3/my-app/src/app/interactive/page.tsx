'use client';
import { useState } from 'react';
import MovieList from '@/app/components/MovieList';
import { Movie } from '../../types';
import '@/styles/globals.css';

const InteractivePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a search query');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiKey = '1b411645'; // Clave API proporcionada
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Movie Search</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-2 border-gray-600 p-3 rounded-lg w-full max-w-md text-black focus:outline-none focus:border-blue-500"
          placeholder="Search for movies..."
        />
        <button onClick={handleSearch} className="ml-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Search
        </button>
      </div>
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {movies.length === 0 && !loading && !error && <p className="text-center text-gray-400">No movies found. Try a different search term.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default InteractivePage;
