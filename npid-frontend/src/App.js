import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import State from './State';
import StateCitySelector from './State-City';
import Home from './Home';
import DeathChart from './Temporal';
import Detailed from './Detailed';

function App() {
  const backendURL = 'http://127.0.0.1:5000';
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home backendURL={backendURL}/>} />
          <Route path="/state" element={<State backendURL={backendURL}/>} />
          <Route path="/state-city" element={<StateCitySelector backendURL={backendURL}/>} />
          <Route path="/temporal" element={<DeathChart backendURL={backendURL}/>} />
          <Route path="/detailed" element={<Detailed backendURL={backendURL}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;