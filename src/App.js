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
    cards: CARDS
}
  render() {
    return (
      <div className="App">
        <Grid cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
