import React, {Component} from 'react';
import Banner from '../../components/Banner/banner.component';
import FaceCollection from '../../components/FaceCollection/facecollection.component';
import './hogwarts.style.scss'
import SortingHat from '../sortinghat/sortinghat.component';
import {Link} from 'react-router-dom';

const houseData =[];

const Hogwarts = () => (
         <div className='hogwarts-container'>
             <Banner imagelink='https://cdn.pixabay.com/photo/2015/09/20/22/38/library-948965_1280.jpg'/>                
             
        
        <div className='text-area'>
            <h1>Hogwarts</h1>
            <h3>School of Witchcraft and Wizardry</h3>
            <div className='hogwarts-story'>
                <p>Founded around the 9th century and 10th century, Hogwarts was established in the 
                    Highlands of Scotland to educate young wizards and witches as well as to keep 
                    students safe from Muggle persecution.The school's motto was <i>Draco Dormiens Nunquam Titillandus (Draco Dormiens Nvnqvam 
                    Titillandvs)</i>, which, translated from Latin, means "Never tickle a sleeping dragon".</p>

                <p>Hogwarts was considered to be one of the finest magical institutions in the wizarding
                     world, though other notable schools included <i>Beauxbatons Academy of Magic</i> in France,
                      the <i>Durmstrang Institute</i> implied to be in northern Europe, and <i>Ilvermorny School 
                      of Witchcraft and Wizardry</i> in the United States.</p>
                            
                <p>Hogwarts is divided into four houses, each bearing the last name of its founder: 
                      <b> Godric Gryffindor</b>, <b>Salazar Slytherin</b>, <b>Rowena Ravenclaw</b> and <b>Helga Hufflepuff</b>.</p>
                
               
              
            </div>
        </div>
        <div className='houses'>
            
                <div className='house four' id="one">
                        <div className='h-button'> <button> <Link to='/ravenclaw'>Ravenclaw</Link></button></div>
                </div>

                <div className='house two' id="two" >
                        <div className='h-button'> <button> <Link to='/gryffindor'>Gryffindor</Link></button></div>
                </div>

                <div className='house one' id="three">                
                        <div className='h-button'><button> <Link to='/slytherin'>Slytherin</Link></button> </div>
                </div>

                <div className='house three' id="four">
                        <div className='h-button'> <button> <Link to='/hufflepuff'>Hufflepuff</Link></button></div>
                </div>
        </div>
        <div className='house-text'>
                    
                    <p>The four House dormitories have secret entrances, generally known only to 
                        members of that house and require a password (Gryffindor and Slytherin), 
                        riddle answer (Ravenclaw) or ritual (Hufflepuff) in order to gain entrance. 
                        Inside is the common room, which contains armchairs and sofas for the pupils a
                        nd tables for studying and homework. </p>
                </div>

        <div className='sorting-hat'>
               <SortingHat/>
        </div>

        <div className='others'>
        <h2>More About Hogwarts</h2>
        <p>At Hogwarts, British and Irish children with magical abilities were enrolled at birth by the Quill 
                    of Acceptance and Book of Admittance, and acceptance was confirmed by owl post at 
                    age eleven. However, if the child in question was a Muggle-born or a half-blood 
                    like Harry Potter with no knowledge of the wizarding world, a special messenger from 
                    the school visited the child and his or her family in order to inform them of their 
                    magical heritage and the existence of the wizarding world. It was possible for students 
                    to transfer to the school as well.</p>
        <p>
                The day begins at Hogwarts with breakfast in the Great Hall. Students sit at their own 
                House table and can eat and socialise, or finish homework. The Headmaster or Headmistress 
                eats with the professors at the High Table placed at the far end of the hall. During 
                breakfast, owls bring in the students' post, generally consisting of The Daily Prophet, 
                letters from parents or friends, or packages from home. A bell signals the start of the 
                first class of the morning at 9 am.
                </p>
                <p>
                    There are two long morning classes with a short break in between them for students to get to 
                    their next class. After lunch, classes resume at 1 pm, and there is a break around afternoon 
                    teatime before another class period. The classes are about one hour in length, with occasional 
                    double periods lasting two hours. Classes end around five o'clock. 
                </p>
                <p>
                    First-year students get Friday afternoons off, while sixth- and seventh-year students have several 
                    free periods during the week. In the evening, students eat their dinner in the Great Hall, after 
                    which they are expected to be in their common rooms. Astronomy classes take place late at night 
                    in the Astronomy Tower.
                </p>
                <p>
                    On designated weekends, Hogwarts students in their third year or higher, with a signed 
                    permission slip, are permitted to walk to the nearby wizarding village of Hogsmeade, where they 
                    can relax and enjoy the pubs, restaurants and shops. 
                </p>
                <p>
                    Favourite places in Hogsmeade include Honeydukes Sweetshop, Zonko's Joke Shop, clothing stores 
                    such as Gladrags Wizardwear, the Shrieking Shack (regarded as the most haunted building in Britain),
                     the pubs The Three Broomsticks and The Hog's Head, and Madam Puddifoot's coffee shop.
                </p>
        </div>

         </div>
        )
   
export default Hogwarts; 
