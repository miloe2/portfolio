import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exhibitions from './Page/Exhibitions';
import Navigator from './Components/Navigator/Navigator';
import Develope from './Page/Develope';
import Home from './Page/Home';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/develope" element={<Develope/>}/>
        <Route path="/exhibitions" element={<Exhibitions/>}/>
      </Routes>
      <Navigator/>
    </Router>

    </>
  );
}

export default App;
