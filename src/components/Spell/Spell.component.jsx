import React from 'react';
import './Spell.style.scss';

const Spell = ({name, other_name, mention, prononciation, spell_type, etymology, note, description}) =>(
    <div className='card-container'>
        <span> {name}</span>
        
        <div className="description">
            <p>{other_name}</p>
            <p>{prononciation}</p>

            <p>{description}</p>
            <p>{mention}</p>
            <p>{spell_type}</p>
            <p>{etymology}</p>
            <p>{note}</p>
        </div>
    </div>
);

export default Spell;