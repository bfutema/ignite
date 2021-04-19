import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState({ id: 1, title: 'Ação' });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenre.id} onSelectGenre={setSelectedGenre} />

      <Content selectedGenre={selectedGenre} />
    </div>
  )
}