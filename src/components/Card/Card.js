import React from 'react';
import './Card.css';

const card = props => {
    const {color, opened, show, id, match} = props;
    let classes = ['Card'];
    if(match === true) {
        classes.push('Success');
    }
    return (
        <li
          onClick={() => show(id)}
          className={classes.join(' ')}
          style={{background: opened ? color : '#f9f9f9'}}>
        </li>
    )
}

export default card;
