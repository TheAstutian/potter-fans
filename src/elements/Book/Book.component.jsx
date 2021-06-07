import React from 'react';

import './Book.style.scss'

const Book = ({title, link, authors, imageurl,description,publisher,release_date,rating})=>{
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
                <p>Author: {authors}</p>
               <p>Publisher: {publisher}</p>
               <p>Released: {release_date}</p>
               <p>Rating: {rating}</p>

            </div>
        </div>
    )
}

export default Book;