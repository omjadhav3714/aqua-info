import React, { useEffect, useState } from 'react';
import { fishListOptions, fetchData } from './utils/fetchData'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      exercisesData = await fetchData('https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species', fishListOptions);
      setData(exercisesData);
    }
    fetchExercisesData();
  }, [])
  return (
    <div className="App">
      {console.log(data)}
    </div>
  );
}

export default App;
