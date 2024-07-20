import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Albums from './Pages/Albums';
import Songs from './Pages/Songs';
import Artists from './Pages/Artists';
import Podcasts from './Pages/Podcasts';
import Playlist from './Pages/Playlist';
import PodcastId from './Pages/PodcastId';
import ArtistId from './Pages/ArtistId';
import SongDetail from './Pages/SongId';
import AlbumId from './Pages/AlbumId';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/podcasts/:itemId" element={<PodcastId />} />
      <Route path="/artists/:id" element={<ArtistId />} />
      <Route path="/songs/:id" element={<SongDetail />} />
      < Route path="/albums/:id" element={< AlbumId />} />
    </Routes>
  );
}

export default App;
