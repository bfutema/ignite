import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { Button } from './Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId: number;
  onSelectGenre: (_genreId: GenreResponseProps) => void;
}

export function SideBar({
  selectedGenreId,
  onSelectGenre,
}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api
      .get<GenreResponseProps[]>('genres')
      .then(response => setGenres(response.data));
  }, []);

  function handleClickButton(genre: GenreResponseProps) {
    onSelectGenre(genre);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
