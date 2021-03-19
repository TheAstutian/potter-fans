import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as CloseMenu} from "../../assets/x.svg";
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";

import './header.style.scss';

const Header = () => {

            const [click, setClick] = useState(false);
            const handleClick =() => setClick(!click);
            const closeMobileMenu = () => setClick(false);

    return (
                <div className='header-container'>
                    <div className='header-font'>
                        <h1><Link to='/'>Potter World</Link></h1>
                    </div> 
            
                    <div className='header-navs'>
                        <ul className={click? " nav-options active" : "nav-options"}>
                            <li><Link to='/movies'>MOVIES</Link></li>
                            <li><Link to='/books'>BOOKS</Link></li>
                            <li><Link to='hogwarts'> HOGWARTS</Link></li>
                            <li><Link to='spells'>SPELL BOOK</Link></li>
                            <li><Link to='sorting'>SORTING HAT</Link></li>
                        </ul>
                    </div>
            
            
                </div>
        )
}
    


export default Header; 