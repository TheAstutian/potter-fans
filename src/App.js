import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'; 
import Footer from './components/footer/footer.component';

import './App.css';
import SpellsPage from './pages/spells/spellspage.component';
import BookPage from './pages/books/bookpage.component';
import Hogwarts from './pages/hogwarts/hogwarts.component';
import MoviePage from './pages/movies/moviespage.component';
import SortingHat from './pages/sortinghat/sortinghat.component';

function App() {
  return (
    <div className="App">
      { (component={Homepage})?  <Banner /> : null }
      <Header />
      
      <Switch>
        <Route exact path='/' component ={Homepage} />
        <Route exact path='/spells' component={SpellsPage} />
        <Route exact path ='/books' component={BookPage}/>
        <Route exact path ='/hogwarts' component = {Hogwarts} />
        <Route exact path ='/movies' component ={MoviePage} />
        <Route exact path='/sorting' component ={SortingHat} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
