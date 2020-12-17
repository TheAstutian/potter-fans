import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>(
    <div className='header-container'>
        <div className='header-font'>
        <h1>Potter fans</h1>
        </div> 

        <div className='header-navs'>
            <Link to='/movies'><li>Movies</li></Link>
            <Link to='/books'><li>Books</li></Link>
            <Link to='hogwarts'><li>Visit Hogwarts</li></Link>
            <Link to='spells'><li>Spell Book</li></Link>
            <Link to='sorting'><li>Sorting Hat</li></Link>
        </div>

    </div>
)
    


export default Header; 