import React from 'react';

import './Book.style.scss'

const Book = ({title, link, authors,pages, imageurl,description,publisher,release_date,rating})=>{
    return(
        <div className='book-bgd'>
            <div className='top-area'>
            <a href={link}><span>{title}</span></a>
            </div>
            <div className='middle-area'>
                <div className='middle-area-image'>
                <img src={imageurl} />
                </div>
                <div className='middle-area-text'>
                    <p>{description}</p>

                    <a href={link}><button>View on Google</button></a>
                </div>
            </div>
            <div className='bottom-area'>

               <div className="footnote"><p>Author:</p> <span>{authors}</span></div>
               <div className='footnote'><p>Publisher:</p><span>{publisher}</span></div>
               <div className="footnote"><p>Release:</p> <span>{release_date}</span></div>
               <div className="footnote"><p>Pages:</p> <span>{pages}</span></div>
               <div className="footnote"><p>Rating:</p> <span>{rating}</span></div>

            </div>
        </div>
    )
}

export default Book;