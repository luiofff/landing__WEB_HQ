import React from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SecondPage from './pages/SecondPage/SecondPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/set" element={ <SecondPage />} />
          <Route path="/error" element={ <ErrorPage />} />
        </Routes>
     
    </div>
  );
}

export default App;
