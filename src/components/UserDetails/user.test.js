
// const React = require('react');
// const UserDetails = require('./user.details-component')
// const add = require("./user.details-component").add;

import React from 'react'
import UserDetails from './user.details-component'
import {shallow} from 'enzyme'
import Button from "@material-ui/core/Button";


it('expect to render UserDetails component', ()=> {
    expect(shallow(<UserDetails values={{}} handleChange={jest.fn()} />).length).toEqual(1)
})

it('to check if handlechange function executes when button is clicked', ()=> {
    const mockCallButton = jest.fn()
    const fakeEvent = { preventDefault: mockCallButton };
    const wrapper = shallow(
      <UserDetails nextStep={jest.fn()} values={{}} handleChange={jest.fn()} />
    );
    wrapper.find(Button).simulate("click", fakeEvent);
    expect(mockCallButton).toHaveBeenCalled()
})

