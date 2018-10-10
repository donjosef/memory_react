import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameOver from './components/GameOver/GameOver';

configure({
    adapter: new Adapter()
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe(' <App />', () => {
    it('should render <GameOver /> if every card is open', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({cards: [ {opened: true} ]});
      expect(wrapper.find(GameOver)).toHaveLength(1);        
    });
});
