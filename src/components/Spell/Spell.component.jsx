import React from 'react';
import './Spell.style.scss';

const Spell = ({name, other_name, mention, incantation, spell_type, etymology, note, description}) =>(
    
    
    <div className="spell-container"  >
        <div id={spell_type}>
            <div className="spell">
                <span> {name}</span>
                
                <div className="description">
                    <p>{incantation}</p>
                    <p>{description}</p>
                    <p>{spell_type}</p>
                    <p>{note}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Spell;