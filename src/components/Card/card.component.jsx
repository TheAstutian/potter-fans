import React from 'react';
import PotionInfo from '../PotionInfo/PotionInfo';
import './card.style.scss';
import no_image from'./../../assets/no_image.png'; 



/*const Card = ({show,handleShow, handleClose, name, image, effect, difficulty, ingredients, characteristics, wiki}) =>*/

class Card extends React.Component{
    super(props){
    }


    render(){
        const {image,effect,name}=this.props.data;
        return(
            <div className='card-container'>
            <div className="image">
                <img src={image? `${image}`:no_image}/>
            </div>
            
            <div className='name' onClick={()=>this.props.test(this.props.data)}>
                <span> {name}</span>
            </div>        
            <div className='effect'>
                <span> {effect}</span>
            </div>
          
        </div>
        )
    }
}
    

export default Card;