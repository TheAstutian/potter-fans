import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'; 
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Homepage />

      <Footer />

    </div>
  );
}

export default App;
