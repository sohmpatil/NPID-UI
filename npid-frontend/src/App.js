import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import State from './State';
import StateCitySelector from './State-City';
import Home from './Home';
import DeathChart from './Temporal';
import Detailed from './Detailed';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<State />} />
          <Route path="/state-city" element={<StateCitySelector/>} />
          <Route path="/temporal" element={<DeathChart/>} />
          <Route path="/detailed" element={<Detailed/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;