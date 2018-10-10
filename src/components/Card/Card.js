import React from 'react';
import './Card.css';

const card = props => {
    const {color, opened, show, id} = props;
    return (
        <li
          onClick={() => show(id)}
          className='Card'
          style={{background: opened ? color : '#f9f9f9'}}>
        </li>
    )
}

export default card;
