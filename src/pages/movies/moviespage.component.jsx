import React, { Component} from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from  '../../config.js';
import HeroImage from '../../elements/HeroImage/HeroImage';
import SearchBar from '../../elements/SearchBar/SearchBar';
import FourColGrid from '../../elements/FourColGrid/FourColGrid';
import MovieThumb from '../../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../../elements/Spinner/Spinner';
import './movies.css';



class Home extends Component {
	state = {
		movies: [], 
		HeroImage: null, 
		loading: false,
		currentPage: 0,
		totalPages: 0,
		searchTerm: ''
	}


	componentDidMount(){
		this.setState({loading:true});
		const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${"Harry potter"}`;
		const endpoint1 = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		this.fetchItems(endpoint);
	}


	 fetchItems =(endpoint) =>{
	 		fetch(endpoint)
	 		.then(result=>result.json())
	 		.then(result=>{
				 console.log(result);
	 			this.setState({
	 				movies: [...this.state.movies, ...result.results],
	 				heroImage: this.state.heroImage || result.results[0],
	 				loading: false,
	 				currentPage: result.page,
	 				totalPages: result.total_pages
	 			})
	 		})
	 }

	render(){
	return (
		<div className="rmdb-home">
		{this.state.heroImage ?
				<div>
					<HeroImage 
						image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}	
						title={this.state.heroImage.original_title}
						text={this.state.heroImage.overview}
					/>
					
				</div> : null }

			<div className="rmdb-home-grid">
				<FourColGrid 
				header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
				loading={this.state.loading}
			 	>
					{this.state.movies.map((element,i)=>{
						return <MovieThumb 
									key={i}
									clickable={true}
									image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
									movieID={element.id}
									movieName={element.original_title}
								/>
					})}
				
				</FourColGrid>
				
			</div>
			
		</div>
	)
	}
}

export default Home;