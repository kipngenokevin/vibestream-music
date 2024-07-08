import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import home from './Pages/Home';

function App() {
    return (
      <Routes>
        <Route exact path="/" element={<home />} />
      </Routes>
  );
}

export default App;
