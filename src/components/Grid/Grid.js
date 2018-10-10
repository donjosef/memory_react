import React from 'react';
import Card from '../Card/Card';
import './Grid.css';

const grid = props => {

    const cards = props.cards.map(card => (
        <Card
          key={card.color + card.id}
          show={props.show}
          id={card.id}
          color={card.color}
          opened={card.opened}
          match={card.match}/>
    ));
    return(
        <ul className="Grid">
           {cards}
        </ul>

    )
}

export default grid;
