import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

configure({
    adapter: new Adapter()
});

describe('<Card />', () => {
  let wrapper;
  beforeEach(() => {
        wrapper = shallow(<Card match/>);
  });

  it('should have a Success class if match is true', () => {
    expect(wrapper.find('.Card').hasClass('Success')).toEqual(true);
  });

  it('should have a Fail class if match is false', () => {
    wrapper.setProps({match: false});
    expect(wrapper.find('.Card').hasClass('Fail')).toEqual(true);
  });
});
