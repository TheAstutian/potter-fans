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
            
                    <div className='menus'>
                            <div className='header-navs'>
                                <ul className={click? " nav-options active" : "nav-options"}>
                                <li className="option" > <Link to='hogwarts'> HOGWARTS</Link></li>
                                    <li className="option" > <Link to='/movies'>MOVIES</Link></li>
                                    <li className="option" > <Link to='/books'>BOOKS</Link></li>
                                    <li className="option"> <Link to='/sorting'>SORTING HAT</Link></li>
                                    <li className="option" > <Link to='/spells'>SPELLS</Link></li>
                                    <li className="option" > <Link to='/potions'>POTIONS</Link></li>
                                </ul>
                            </div>

                            <div className="mobile-menu" onClick={handleClick}>
                                {click? 
                                    (<CloseMenu className="menu-icon" />)
                                    :
                                    (<MenuIcon className="menu-icon" />)
                                    }
                            </div>
                    </div>
            
            
                </div>
        )
}
    


export default Header; 