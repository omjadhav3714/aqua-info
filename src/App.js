import React, { useState } from 'react';
import SearchFishes from './components/SearchFishes';
import Fishes from './components/Fishes';

function App() {
  const [fishes, setFishes] = useState([]);

  return (
    <div className="App">
      <SearchFishes setFishes={setFishes} />
      <Fishes fishes={fishes} setFishes={setFishes} />
    </div>
  );
}

export default App;
