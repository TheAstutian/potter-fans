import React from 'react';


import './footer.style.scss'; 

const Footer = () => (
< div className='footer'>
    
        <div className='links'>
                <div className='links-1'>
                        <div className="link-entry">
                            <div className="f-span"><span> Official HP Sites</span></div>
                            <ul>
                                <li><a href="https://www.jkrowling.com/"> J.K. Rowling </a></li>
                                <li><a href="https://www.wizardingworld.com/"> Wizarding World </a></li>
                                <li><a href="http://www.bloomsbury.com/harrypotter">Bloomsbury (books)</a></li>
                                <li><a href="http://harrypotter.warnerbros.com/">Warner Bros (movies)</a></li>
                                <li><a href='https://www.harrypotterfanzone.com/'>Fan Zone</a></li>
                            </ul>

                        </div>

                        <div className="link-entry">
                        <div className="f-span"><span> Media </span></div>
                            <ul>
                                <li><a href="https://thedailyprophet.net/">The Daily Prophet</a></li>
                                <li><a href="https://thequibs.com/">The Quibbler</a></li>
                                <li><a href="https://www.pottertalk.net/">Potter Talk</a></li>
                                <li><a href="https://www.mugglenet.com/">MuggleNet</a></li>
                                <li><a href="http://www.potterdome.eu/">PotterDome</a></li>   
                            </ul>

                        </div>
            </div>

            <div className='links-1'>
                        <div className="link-entry">
                        <div className="f-span"><span> Forum and Communities </span></div>
                            <ul>
                                <li><a href="https://www.hexrpg.com/">Hogwarts Extreme</a></li>
                                <li><a href=""></a></li>
                                <li><a href="http://charmingrp.com/index.php">Charming</a></li>
                                <li><a href="https://thebeginning11.proboards.com/">The Beginning of the end</a></li>
                                <li><a href="https://elpida.jcink.net/">Elpida</a></li>
                            </ul>

                        </div>
                        <div className="link-entry">
                        <div className="f-span"><span> Fan Fiction </span></div>
                            <ul>
                              <li><a href=""></a></li>
                                <li></li>
                                <li></li>
                               


                            </ul>

                        </div>
            </div>
            
            <div className='links-1'>
                        <div className="link-entry">
                        <div className="f-span"><span> Wiki </span></div>
                            <ul>
                                <li><a href='https://www.hp-lexicon.org/'> Harry Potter Lexicon</a></li>
                                <li><a href='https://wikipotter-more.fandom.com/pt-br/wiki/Wiki_WikiPotter'>WikiPotter</a></li>    
                                <li><a href="https://www.hogwartsbynight.com/">Hogwarts by Night</a></li>
                                <li><a href="http://en.wikipedia.org/wiki/Portal:Harry_Potter">Wikipedia</a></li>
                            </ul>

                        </div>
                        <div className="link-entry">
                        <div className="f-span"><span> Charity </span></div>
                            <ul>
                                <li><a href="https://potterdome.eu/overons/potterdomeforprivacy/">Free Internet</a></li>
                                
                            </ul>

                        </div>
            </div>
           
        
        </div>
        <div className='copyright'>
        
         <span>Copyright 2020, The Astutians. </span>
        </div>
    </div>
)

export default Footer; 