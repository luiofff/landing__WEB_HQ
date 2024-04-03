import React from 'react';
import logo from './logo.svg';
import './App.css';


import Navbar from './ui/navbar/Navbar';
import StartBlock from './ui/startBlock/StartBlock';
import SecondBlock from './ui/secondBlock/SecondBlock';
import ThirdBlock from './ui/thirdBlock/ThirdBlock';
import FourBlock from './ui/fourBlock/FourBlock';
import FiveBlock from './ui/fiveBlock/FiveBlock';
import Footer from './ui/footer/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
       <StartBlock />
       <SecondBlock />
       <ThirdBlock />
       <FourBlock />
       <FiveBlock />
       <Footer />
    </div>
  );
}

export default App;
