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
                this.setState({loading: true})
		const endpoints= 'https://www.googleapis.com/books/v1/volumes/';
		
                for (var i=0; i<this.state.books_id.length; i++){
                        
                        this.fetchItems(endpoints+this.state.books_id[i])
                }
                console.log("component mounted")
                
	}

        fetchItems=(endpoint)=>{
        
                fetch(endpoint)
                .then(result=>result.json())
                .then(result=>{
                     this.setState({
                             books: [...this.state.books, result]
                     })
                        
                })
               
        }       


        render(){
        return(
                <div>
                        <Banner imagelink='https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
                        <h2>Harry Potter Books</h2>
                        <div>
                                
                                { this.state.books.map((element,i)=>{
						return <Book 
									key={i}
                                                                        
									title={element.volumeInfo.title}
                                                                        authors={element.volumeInfo.authors[0]}
									imageurl={element.volumeInfo.imageLinks.thumbnail} 
                                                                        description={element.volumeInfo.description}
									publisher={element.volumeInfo.publisher}
                                                                        release_date={element.volumeInfo.publishedDate}
                                                                        rating={element.volumeInfo.averageRating}
                                                                        link={element.volumeInfo.previewLink}
								/>
					})}
                                
                        </div>
                </div>  
        )
        }
}
   

export default BookPage; 