import React , {Component} from 'react';
import {Link} from 'react-router-dom'

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 



const Homepage = () => (
                    
            <div className='container'>
                       <Banner />                
                       <div className='experiment'>

                            <div className='banner-1'>
                                <span>We’ve all got both light and darkness inside us.</span>
                                <span> What matters is the part we choose to act on. </span>
                                <span>That’s who we really are.</span>  
                                <span> ..........</span>
                                <span>Who are you?? In what house do you belong? Get sorted by the sorting hat!</span>
                                <button><Link to='/sorting'>Get Sorted!</Link></button>                                   
                                </div>
                            <div className='banner-2'>
                                <img src='https://cdn.pixabay.com/photo/2015/03/16/04/15/sorting-hat-675364_1280.jpg' />
                            </div>
                        
                        </div> 
                                                
 
                        <div className='movie-book'>
                            <div className="pf-books"  >
                               
                                <div className='le-button'> <button><Link to='/books'>Harry Potter Books</Link></button></div>
                            </div>

                            <div className="pf-movies ">
                                
                                    <div className='mov-img'>
                                    <img src='https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
                                    </div>
                                    <div className='mov-txt'>
                                        <span> Wanna know more about Harry Potter movies?</span>
                                        <span> Which actor starred where? </span>
                                        <span>In the Sorcerer's Stone?</span>
                                        <span>The Goblet of Fire?</span>
                                        <span> The Half-blood Prince?</span>
                                        <Link to='/movies'><button>HP Movies</button></Link>
                                    </div>
                            </div>
                        </div>

                        <div className="pf-spells">
                            <h1><Link to='/spells'>The magical box of spells </Link>   </h1>
                            <img src='https://images.pexels.com/photos/5402712/pexels-photo-5402712.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' />
                            <span>Do you know that other spells exist apart from expeliarmus and abracadabra?</span>
                            <Link to='/spells'><button>HP Spells</button></Link>
                        </div>

                        <div className="jk-rowling ">
                            <h1>Who is <a href='https://www.jkrowling.com/'> J. K. Rowling? </a></h1>
                            <img src='https://media3.s-nbcnews.com/i/newscms/2020_24/3386271/200610-jk-rowling-al-1348_c9a1eed578999b876d0ef072061a87c3.jpg' />
                            <div className='jk-text'>
                                <p>Joanne Rowling was born on 31st July 1965 at Yate General Hospital near Bristol, and grew up in Gloucestershire in England and in Chepstow, Gwent, in south-east Wales.</p>
                                <p>The “K” stands for Kathleen, her paternal grandmother’s name. It was added at her publisher’s request, who thought a book by an obviously female author might not appeal to the target audience of young boys.</p>
                                <p>She is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007. Along with the three companion... <a href='https://www.jkrowling.com/about/'> read more</a></p> 
                            </div>
                            
                        </div>
                        
            </div>
                    
        )  


export default Homepage; 