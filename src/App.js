import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Albums from './Pages/Albums';
import Songs from './Pages/Songs';
import Artists from './Pages/Artists';
import Podcasts from './Pages/Podcasts';
import PodcastId from './Pages/PodcastId';
import ArtistId from './Pages/ArtistId';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/podcasts/:itemId" element={<PodcastId />} />
      <Route path="/artists/:itemId" element={<ArtistId />} />
    </Routes>
  );
}

export default App;
