import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'; 
import Banner from './components/Banner/banner.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner /> 
      <Homepage />
    </div>
  );
}

export default App;
