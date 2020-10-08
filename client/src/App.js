import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import FruitGrid from './components/fruit-grid/FruitGrid';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <FruitGrid />
    </div>
  );
};

export default App;
