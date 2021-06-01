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
		const endpoints= 'https://www.googleapis.com/books/v1/volumes/';
		var new_books=[]
                for (var i=0; i<this.state.books_id.length; i++){
               
               var new_book;
               new_book= this.fetchItems(endpoints+this.state.books_id[i])
               new_books.push(new_book)
                }
                this.setState({
                        books: [...this.state.books, new_books]
                })
	}

        fetchItems=(endpoint)=>{
                let books_loading=[];
                fetch(endpoint)
                .then(result=>result.json())
                .then(result=>{
                       books_loading.push(result)
                })
               return books_loading;
        }       


        render(){
        return(
                <div>
                        <h2>Harry Potter Books</h2>
                        {console.log("i loaded")}
                        {console.log(this.state.books)
                        }

                </div>  
        )
        }
}
   

export default BookPage; 