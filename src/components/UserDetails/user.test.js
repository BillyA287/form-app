
// const React = require('react');
// const UserDetails = require('./user.details-component')
// const add = require("./user.details-component").add;

import React from 'react'
import UserDetails from './user.details-component'
import {shallow} from 'enzyme'
// describe('UserDetails', ()=>{
//     const wrapper = shallow(<UserDetails/>)
//     it('renders', ()=> {
//         expect(wrapper.contains("Enter User Details")).toEqual(true);
//     })
// })

const setup = props => {
    const component = shallow(<UserDetails {...props} />)
    return {
        component: component
    }
}
describe('UserDetails', ()=>{
    it('should render a form page', ()=>{
        const {component} = setup({UserDetails: <UserDetails/>});
        expect(component.props().UserDetails).toBeDefined()
    })
})
