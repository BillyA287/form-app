import React from 'react'
import Form from './form-component'
import { shallow } from "enzyme";
import renderer from "react-test-renderer";




it("Correctly renders Form component", () => {
  expect(shallow(<Form  />)).toMatchSnapshot();
});


//accessing state
    const wrapper = shallow(<Form  />)
// accessing method 
const classInstance = wrapper.instance()

it('nextStep method should update state as accordingly', ()=> {
    
    
    //testing method 
    classInstance.nextStep()
    const newState = classInstance.state.step;
    expect(newState).toEqual(2)
})

it('Previous step method should decrement state', ()=> {
  classInstance.previousStep()
  const newState = classInstance.state.step;
  expect(newState).toEqual(1)
})



