import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import State from './State';
import StateCitySelector from './State-City';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/State" element={<State />} />
          <Route path="/state-city" element={<StateCitySelector/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;