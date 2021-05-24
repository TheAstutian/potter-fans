import React, { Component} from 'react';
import {API_URL, API_KEY} from '../../config.js';
import Navigation from '../../components/elements/Navigation/Navigation.js';
import MovieInfo from '../../components/elements/MovieInfo/MovieInfo.js';
import MovieInfoBar from '../../components/elements/MovieInfoBar/MovieInfoBar.js';
import FourColGrid from '../../components/elements/FourColGrid/FourColGrid.js';
import Actor from '../../components/elements/Actor/Actor';
import Spinner from '../../components/elements/Spinner/Spinner';

import './movies.css'; 


class Movie extends Component {
    state={
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading:true})
        //first fetch the movie...
        const endpoint = `${API_URL}movie/${this.props.match.params.movieID}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result=> result.json())
        .then(result => { 
            
                
            if (result.status_code) {
                this.setState({loading: false})
            } else {
                this.setState({ movie:result }, ()=>{
                    //...then fetch actors in the setState callback function
                    const endpoint = `${API_URL}movie/${this.props.match.params.movieID}/credits?api_key=${API_KEY}`;
                    fetch (endpoint)
                    .then(result => result.json())
                    .then(result => {
                        const directors = result.crew.filter((member)=> member.job ==="Director");
                        this.setState({
                            actors: result.cast,
                            directors,
                            loading: false
                        })
                    })
                })
            }

        })
        .catch (error => console.error ('Error: ' , error)); 
    }

    render(){
        return(
            <div className="rmdb-movie">
                {this.state.movie ? 
                    <div>
                        <Navigation movie={this.props.location.moviename} />
                        <MovieInfo movie={this.state.movie} directors={this.state.directors} />
                        <MovieInfoBar time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue} />

                    </div>
                    : 
                    null
                }
            
                {this.state.actors ? 
                    <div className="rmdb-movie-grid">
                        <FourColGrid header={'Actors'} >
                            
                            {this.state.actors.map((element,i) => {
                                return <Actor key={i} actor={element} />
                            })} 
                            </FourColGrid>
                            
                     </div>
                     : 
                     null
                }

                {!this.state.actors && !this.state.loading ? 
                    <h1>No Movie Found</h1> 
                    : 
                    null
                }
                
                {this.state.loading ? <Spinner /> : null}
            </div>
        )
    }
}

export default Movie; 