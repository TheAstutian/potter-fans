import React from 'react'; 

class BookPage extends React.Component {
        state={
                loading: false,
                books: [],
                books_id: [
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
		//const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${"Harry potter"}`;
		const endpoints= 'https://www.googleapis.com/books/v1/volumes/';
                
		for (var i=0; i<this.state.books_id.length; i++){
                      this.fetchItems(endpoints+this.state.books_id[i]);
                }
                this.setState({loading:false})
	}

        fetchItems =(endpoint) =>{
                fetch(endpoint)
                .then(result=>result.json())
                .then(result=>{
                        console.log(result);
                        this.setState({
                                books: [...this.state.books, result],
                                                             
                        })
                })
        }
        

        render(){
        return(
                <div>
                        <h2>Harry Potter Books</h2>
                        {console.log("it mounted, books:"+this.state.books)}

                </div>  
        )
        }
}
   

export default BookPage; 