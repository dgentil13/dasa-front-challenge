import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('should render correctly', () => {
    const component = shallow(<Error />);

    expect(component).toMatchSnapshot();
  });
});
