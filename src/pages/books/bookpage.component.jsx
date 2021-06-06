import React from 'react'; 
import Banner from '../../components/Banner/banner.component';
import Book from '../../elements/Book/Book.component';
import FourColGrid from '../../elements/FourColGrid/FourColGrid';

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
                console.log("component mounted")
	}

        fetchItems=(endpoint)=>{
                let books_loading=[];
                fetch(endpoint)
                .then(result=>result.json())
                .then(result=>{
                       books_loading.push(result)

                })
               
        }       

        colgrid=()=>{
                return (
                        <FourColGrid>
                                {console.log(this.state.books)}
                                { this.state.books =[] ? <div>Loading</div> : this.state.books.map((element,i)=>{
						return <Book 
									key={i}
                                                                        rating={element.averageRating}
									title={element.volumeInfo.title}
                                                                        authors={element.volumeInfo.authors[0]}
									imageurl={element.imageLinks.thumbnail} 
                                                                        description={element.description}
									publisher={element.publisher}
                                                                        release_date={element.publishedDate}
                                                                        rating={element.averageRating}
								/>
					})}
                        </FourColGrid>
                )
        }

        render(){
        return(
                <div>
                        <Banner imagelink='https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
                        <h2>Harry Potter Books</h2>
                        <FourColGrid>
                                {console.log(this.state.books)}
                                {console.log("it mounted")}
                                {this.state.loading ? <div>Loading</div>: <div>Not loading</div>}
                        </FourColGrid>
                </div>  
        )
        }
}
   

export default BookPage; 