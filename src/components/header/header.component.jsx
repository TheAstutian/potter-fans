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
                            <li className="option" onClick={closeMobileMenu}><Link to='/movies'>MOVIES</Link></li>
                            <li className="option" onClick={closeMobileMenu}><Link to='/books'>BOOKS</Link></li>
                            <li className="option" onClick={closeMobileMenu}><Link to='hogwarts'> HOGWARTS</Link></li>
                            <li className="option" onClick={closeMobileMenu}><Link to='spells'>SPELL BOOK</Link></li>
                            <li className="option" onClick={closeMobileMenu}><Link to='sorting'>SORTING HAT</Link></li>
                        </ul>
                    </div>

                    <div className="mobile-menu" onClick={handleClick}>
                        {cick? 
                            (<CloseMenu className="menu-icon" />)
                            :
                            (<MenuIcon className="menu-icon" />)
                            }
                    </div>
            
            
                </div>
        )
}
    


export default Header; 