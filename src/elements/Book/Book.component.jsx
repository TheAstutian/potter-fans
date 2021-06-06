import React from 'react';

import './Book.style.scss'

const Book = ({title, authors, imageurl,description,publisher,release_date,rating})=>{
    return(
        <div>
            <div>
            <p>Title: {title}</p>
            <p>Authors:{authors}</p>
            </div>
            <div>
                <div>
                <img src={imageurl} />
                </div>
                <div>
                    <p>{description}</p>

                    Add button/ link for preview
                </div>
            </div>
            <div>
               <p>Publisher: {publisher}</p>
               <p>Released: {release_date}</p>
               <p>Rating: {rating}</p>

            </div>
        </div>
    )
}

export default Book;