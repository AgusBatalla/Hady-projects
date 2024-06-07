'use client'
import { useEffect, useState } from 'react';
import { Movie } from '../../types';

interface MovieDetailProps {
  movieId: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const apiKey = '1b411645'; // Clave API proporcionada
        const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMovie(data);
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

    fetchMovieDetail();
  }, [movieId]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{movie?.Title}</h2>
      <div className="flex justify-center mb-4">
        <img src={movie?.Poster} alt={movie?.Title} className="w-48 rounded-lg" />
      </div>
      <p className="text-gray-300 mb-2"><strong>Year:</strong> {movie?.Year}</p>
      <p className="text-gray-300 mb-2"><strong>Genre:</strong> {movie?.Genre}</p>
      <p className="text-gray-300 mb-2"><strong>Director:</strong> {movie?.Director}</p>
      <p className="text-gray-300"><strong>Plot:</strong> {movie?.Plot}</p>
    </div>
  );
};

export default MovieDetail;
