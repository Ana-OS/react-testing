import React from 'react';
import { configure, shallow } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 
configure({ adapter: new Adapter() });

// the imports above are simulating a browser so I can run my tests

import CheckboxWithLabel from '../checkbox_with_label';


test('CheckboxWithLabel changes the text after click', () => {

     // Render a checkbox with label in the document
    const checkbox = shallow(
        <CheckboxWithLabel labelOn="On" labelOff="Off" /> 
    );

    // testing:
    // at first label is off
    expect(checkbox.text()).toEqual('Off'); 

      // user clicks 
    checkbox.find('input').simulate('change'); 

    // label is on
    expect(checkbox.text()).toEqual('On');
});