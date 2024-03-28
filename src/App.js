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
import Hufflepuff from './pages/hogwarts/hufflepuff';
import Gryffindor from './pages/hogwarts/gryffindor';
import Slytherin from './pages/hogwarts/slytherin';
import Ravenclaw from './pages/hogwarts/ravenclaw';



function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path='/' component ={Homepage} />
        <Route exact path='/spells' component={SpellsPage} />
        <Route exact path ='/books' component={BookPage}/>
        <Route exact path ='/hogwarts' component = {Hogwarts} />
        <Route exact path ='/gryffindor' component = {Gryffindor} />
        <Route exact path ='/slytherin' component = {Slytherin} />
        <Route exact path ='/ravenclaw' component = {Ravenclaw} />
        <Route exact path ='/hufflepuff' component = {Hufflepuff} />
        <Route exact path='/sorting' component ={SortingHat} />
        <Route exact path ='/potions' component ={PotionsPage} />
        <Route exact path ='/movies' component ={MoviePage} />
        <Route exact path='/movies/:movieID' component={Movie}  />
        
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
