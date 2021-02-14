import React from 'react';
import './button.style.scss';

const Button = ({children, ...otherProps}) => (
    <div>
        <button>{children} </button>
    </div>
)

export default Button; 