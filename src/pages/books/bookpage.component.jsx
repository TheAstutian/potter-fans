import React from 'react'; 

class BookPage extends Component {
        state={
                loading: false,
                books: []
        }



        componentDidMount(){
		this.setState({loading:true});
		const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${"Harry potter"}`;
		const endpointbk2= 'https://www.googleapis.com/books/v1/volumes/Wlp0nAEACAAJ';
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
        return(
                <div>
                        <h2>Harry Potter Books</h2>


                </div>  
        )
        }
}
   

export default BookPage; 