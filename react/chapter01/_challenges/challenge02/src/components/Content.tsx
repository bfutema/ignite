import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { Header } from './Header';
import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string; }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenre: { id: number; title: string; };
}

export function Content({ selectedGenre }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenre.id}`)
      .then(response => setMovies(response.data));
  }, [selectedGenre.id]);

  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}