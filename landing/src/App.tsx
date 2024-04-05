import React from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SecondPage from './pages/SecondPage/SecondPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/set" element={ <SecondPage />} />
        </Routes>
     
    </div>
  );
}

export default App;
