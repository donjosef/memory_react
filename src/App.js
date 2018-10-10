import React, { Component } from 'react';
import Grid from './components/Grid/Grid';
import './App.css';

const CARDS = [
    {color: '#e21818', id: 0, opened: false, match: undefined},
    {color: '#1866e2', id: 1, opened: false, match: undefined},
    {color: '#33e218', id: 2, opened: false, match: undefined},
    {color: '#1866e2', id: 3, opened: false, match: undefined},
    {color: '#33e218', id: 4, opened: false, match: undefined},
    {color: '#e21818', id: 5, opened: false, match: undefined},
    {color: '#bf28ed', id: 6, opened: false, match: undefined},
    {color: '#edae28', id: 7, opened: false, match: undefined},
    {color: '#5df2f7', id: 8, opened: false, match: undefined},
    {color: '#bf28ed', id: 9, opened: false, match: undefined},
    {color: '#edae28', id: 10, opened: false, match: undefined},
    {color: '#5df2f7', id: 11, opened: false, match: undefined}
];

class App extends Component {

  state = {
    cards: CARDS,
    chosenCards: []
}

showCardHandler = (selectedId) => {
     const cards = this.state.cards.map(card => {
         if(card.id === selectedId) {
             return {
                 ...card,
                 opened: true
             };
         } else {
             return card
         }
     });

      this.setState({ cards }, () => this.fillchosenCards(selectedId)); //after clicking the card, that card will have opened prop true. setState is async, so after it is completed, invoke fillchosenCards
}

fillchosenCards = (selectedId) => {
      //Push the card inside chosenCards array only if its length is less than 2 and it doesnt includes the selectedId yet
      if(this.state.chosenCards.length < 2 && !this.state.chosenCards.some(card => card.id === selectedId)) {
          this.setState(prevState => ({
              chosenCards: prevState.chosenCards.concat(this.state.cards.find(card => card.id === selectedId))
          }), () => {
            //after having filled the chosenCards array
            if(this.state.chosenCards.length === 2) {
                this.checkMatch();
              }
            });
      }
}

checkMatch = () => {
      if(this.state.chosenCards[0].color === this.state.chosenCards[1].color) {
         this.matchSuccess();
      }
}

matchSuccess = () => {
      const cards = this.state.cards.map(card => {
            if(card.color === this.state.chosenCards[0].color) {
                return {
                    ...card,
                    match: true
                }; //a brand new object with match true
            } else {
                return card;
            }
      });
      this.setState({
          cards,
          chosenCards: []
      });
}

  render() {
    return (
      <div className="App">
        <Grid cards={this.state.cards} show={this.showCardHandler}/>
      </div>
    );
  }
}

export default App;
