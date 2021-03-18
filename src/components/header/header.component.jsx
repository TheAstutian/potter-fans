import React from 'react';
import {Link} from 'react-router-dom';

import './header.style.scss';

const Header = () =>(
    <div className='header-container'>
        <div className='header-font'>
        <h1><Link to='/'>Potter World</Link></h1>
        </div> 

        <div className='header-navs'>
            <Link to='/movies'><li>MOVIES</li></Link>
            <Link to='/books'><li>BOOKS</li></Link>
            <Link to='hogwarts'><li> HOGWARTS</li></Link>
            <Link to='spells'><li>SPELL BOOK</li></Link>
            <Link to='sorting'><li>SORTING HAT</li></Link>
        </div>

    </div>
)
    


export default Header; 