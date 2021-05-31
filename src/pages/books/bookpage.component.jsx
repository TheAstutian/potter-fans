import React from 'react'; 

class BookPage extends Component {
        state={
                loading: false,
                books: [],
                books_id:[
                        "39iYWTb6n6cC",
                        "wHlDzHnt6x0C",
                        "wHlDzHnt6x0C", 
                        "KKFTfEQ8bRAC", 
                        "jk87_y-ubE0C",
                        "R7YsowJI9-IC",
                        "gCtazG4ZXlQC" ,
                        "SQZkvgAACAAJ"
                ]
        }



        componentDidMount(){
		this.setState({loading:true});
		const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${"Harry potter"}`;
		const endpoints= 'https://www.googleapis.com/books/v1/volumes?q=harry+potter+and+the';
		this.fetchItems(endpoints);
	}

        fetchItems =(endpoint) =>{
                fetch(endpoint)
                .then(result=>result.json())
                .then(result=>{
                        console.log(result);
                        this.setState({
                                books: [...this.state.books, ...result.results],
                                loading: false,                                
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