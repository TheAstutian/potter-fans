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
		
                var books_loading= [];
               const fetchItems =(endpoint) =>{
                        fetch(endpoint)
                        .then(result=>result.json())
                        .then(result=>{
                                console.log(result);
                            books_loading.push(result)   
                        })
                }
		const endpoints= 'https://www.googleapis.com/books/v1/volumes/';
                
		for (var i=0; i<this.state.books_id.length; i++){
                      fetchItems(endpoints+this.state.books_id[i]);
                }
                this.setState({books: [...this.state.books, books_loading]})
                //console.log("these are the books in component did mount"+this.state.books)
                console.log(books_loading)
	}

        

        render(){
        return(
                <div>
                        <h2>Harry Potter Books</h2>
                        {console.log("these are the books in rendering"+ this.state.books)}

                </div>  
        )
        }
}
   

export default BookPage; 