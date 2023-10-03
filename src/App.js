// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import CarList from './components/CarList';
import SearchBar from './components/SearchBar';


function App() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from JSON file or API
    fetch('/cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className="App">
      <h1 className='top-head'>CAR UNIVERSE</h1>
      <SearchBar onSearch={setSearchTerm} />
      <CarList data={cars} searchTerm={searchTerm} />
    
    </div>
    </>
  );
}

export default App;
