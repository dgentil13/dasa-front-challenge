import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Card repo={repo} />);
  });

  const repo = {
    name: 'dasa-Challenge',
  };

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have props', () => {
    expect(component.props).toBeTruthy();
  });

  it('should display correct information', () => {
    expect(component.find('p').text()).toEqual(repo.name);
  });
});
