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
import Movie from './pages/Movie/Movie';
import NotFound from './elements/NotFound/NotFound'
import PotionsPage from './pages/potions/potions.component';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path='/' component ={Homepage} />
        <Route exact path='/spells' component={SpellsPage} />
        <Route exact path ='/books' component={BookPage}/>
        <Route exact path ='/hogwarts' component = {Hogwarts} />
        <Route exact path='/sorting' component ={SortingHat} />
        <Route exact path ='/potions' component ={PotionsPage} />
        <Route exact path ='/movies' component ={MoviePage} />
        <Route exact path='/movies/:movieID' component={Movie}  />
        <Route component={NotFound} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
