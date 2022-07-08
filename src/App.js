import React, { useState } from 'react';
import SearchFishes from './components/SearchFishes';
import Fishes from './components/Fishes';
import HeroBanner from './components/HeroBanner';

function App() {
  const [fishes, setFishes] = useState([]);

  return (
    <div className="App">
      <HeroBanner />
      <SearchFishes setFishes={setFishes} />
      <Fishes fishes={fishes} setFishes={setFishes} />
    </div>
  );
}

export default App;
