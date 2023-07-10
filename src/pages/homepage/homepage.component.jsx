import React , {Component} from 'react';
import {Link} from 'react-router-dom'

import Banner from '../../components/Banner/banner.component';


import './homepage.style.scss'; 



const Homepage = () => (
                    
            <div className='container'>
                       <Banner 
                       main_content="WELCOME TO THE WORLD OF MAGIC!"
                       subcontent='"It is our choices that show what we truly are, far more than our abilities" '
                       subcontent2="- Albus Dumbledore"
                        />                
                       <div className='experiment'>

                            <div className='banner-1'>
                                <h2>CHOOSE YOUR DESTINY !</h2>
                                    <div className='content'>
                                        <div className='content-image'>
                                        <img className= 'img' src='https://media.tenor.com/4vuIoALDXNwAAAAC/sorting-hat-harry-potter.gif' />  
                                        </div>
                                        <div className='content-body'>
                                       
                                            <span>We’ve all got both light and darkness inside us.
                                            What matters is the part we choose to act on.
                                            That’s who we really are.</span>  
                                            <span> ..........</span>
                                            <span>Who are you?? </span>
                                            <span>Where do you belong?</span>
                                            <span>Let the Sorting Hat sort you</span>
                                            <button className='butn'><Link to='/sorting'>Get Sorted!</Link></button>
                                        </div>
                                 </div>
                            </div>
                            <div className='banner2'>
                                
                                   
                            </div>
                        
                        </div> 


                        <h1 className='explore'> EXPLORE THE MAGIC WORLD</h1>
                    

                        <div className='mid-content'>


                       
                            <div className="pf-books"  >
                               
                                <div className='p-button'> <button><Link to='/books'>Harry Potter Books</Link></button></div>
                            </div>

                            <div className="pf-movies ">
                                    <div className='p-button'>
                                      {/*  <span> Wanna know more about Harry Potter movies?</span>
                                        <span> Which actor starred where? </span>
                                        <span>In the Sorcerer's Stone?</span>
                                        <span>The Goblet of Fire?</span>
                                        <span> The Half-blood Prince?</span> */}
                                       <button> <Link to='/movies'>Harry Potter Movies</Link></button>
                                    </div>
                            </div>
                        

                        <div className="pf-spells">
                         {/*   <div className='pf-spells-span'><span>Do you know any other spells <br/> apart from expeliarmus <br/> and abracadabra?</span></div> */}
                            <div className='p-button'><button><Link to='/spells'>Magical Spells</Link></button></div>
                        </div>

                        <div className='pf-potions'>
                        <div className='p-button'>  <button><Link to='/movies'>Magical Potions</Link></button></div>
                        </div>
                        </div>

                        <div className='hogwarts'>  <button><Link to='/hogwarts'>Visit Hogwarts</Link></button> </div>





                        <div className="jk-rowling ">
                            <h1>About <a href='https://www.jkrowling.com/'> J. K. Rowling </a></h1>
                            <img src='https://media3.s-nbcnews.com/i/newscms/2020_24/3386271/200610-jk-rowling-al-1348_c9a1eed578999b876d0ef072061a87c3.jpg' />
                            <div className='jk-text'>
                                <p>Joanne Rowling was born on 31st July 1965 at Yate General Hospital near Bristol, and grew up in Gloucestershire in England and in Chepstow, Gwent, in south-east Wales.
                                The “K” stands for Kathleen, her paternal grandmother’s name. It was added at her publisher’s request, who thought a book by an obviously female author might not appeal to the target audience of young boys.</p>
                                <p>She is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007. Along with the three companion... <a href='https://www.jkrowling.com/about/'> read more</a></p> 
                            </div>
                            
                        </div>
                        
            </div>
                    
        )  


export default Homepage; 