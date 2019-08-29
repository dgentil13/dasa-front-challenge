import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

const clickHandler = jest.fn();
const changeHandler = jest.fn();
const submitHandler = jest.fn();

describe('SearchBar', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <SearchBar
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        clickHandler={clickHandler}
      />,
    );
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should change search bar display when clicked', () => {
    component.find('input').simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });

  it('should call onChange when user types', () => {
    component.find('input').simulate('change', {
      target: { value: 'user' },
    });
    expect(changeHandler).toHaveBeenCalled();
  });

  it('should submit the search form correctly', () => {
    component.find('form').simulate('submit');
    expect(submitHandler).toHaveBeenCalled();
  });
});
