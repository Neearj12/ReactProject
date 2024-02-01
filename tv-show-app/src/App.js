// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import ShowList from './components/ShowList';
import ShowDetails from "./components/ShowDetails"


const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch shows from the API
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <div className="App ">
    <header className="bg-gradient-to-r from-purple-500 min-h-[20vh] via-pink-500 to-red-500 p-8 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-4">TV Show App</h1>
    </header>
    </div>
        <Routes>
  <Route path="/" element={<ShowList shows={shows} />} />
  <Route path="/show/:id" element={<ShowDetails />} />

</Routes>
    </Router>
  );
};

export default App;


