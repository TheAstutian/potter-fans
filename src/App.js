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
import SocialMediaBanner from './components/SocialMediaBanner/socialmediabanner.component';
import Movie from './pages/Movie/Movie';
import NotFound from './elements/NotFound/NotFound'

function App() {
  return (
    <div className="App">
       <SocialMediaBanner /> 
      <Header />
      
      <Switch>
        <Route exact path='/' component ={Homepage} />
        <Route exact path='/spells' component={SpellsPage} />
        <Route exact path ='/books' component={BookPage}/>
        <Route exact path ='/hogwarts' component = {Hogwarts} />
        <Route exact path ='/movies' component ={MoviePage} />
        <Route path="/:movieID" component={Movie} exact />
        <Route exact path='/sorting' component ={SortingHat} />
        <Route component={NotFound} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
