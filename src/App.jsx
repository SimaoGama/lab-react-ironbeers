import './App.css';
import { Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import AddNewBeer from './pages/AddNewBeer';

import Home from './pages/Home';
import Beer from './components/Beer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<Beer />} />

        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddNewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
