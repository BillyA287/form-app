import React from 'react'
import {shallow} from 'enzyme'
import TextField from "@material-ui/core/TextField";
import PersonalDetails from './personal-component'
import Button from "@material-ui/core/Button";


it('Correctly renders PersonalDetails component', ()=> {
   expect(shallow(<PersonalDetails values={{}} handleChange={jest.fn()} />)).toMatchSnapshot()
})

const baseProps ={
    activeSection: 'email',
    handleChange:jest.fn(),
    onSubmit: jest.fn(),
    updateSection: jest.fn()
}

test('should call funcion on handleSubmit', ()=> {
    const newOnSubmit = jest.fn();
    const newUpdateSection = jest.fn();
    const wrapper = shallow(<PersonalDetails {...baseProps} handleChange={newOnSubmit} values={newUpdateSection}/>);

    const event = {
        target: { value: 'some value' }
    }

    wrapper.find(TextField).at(2).simulate('change', event);
    expect(newOnSubmit).toBeCalled()

})

it('should test if the back function runs when back button is clicked', ()=> {
    const wrapper = shallow(
      <PersonalDetails
        nextStep={jest.fn()}
        handleChange={jest.fn()}
        values={jest.fn()}
      />
    );

    const mockBackFn = jest.fn();
    const fakeEvent = { preventDefault: mockBackFn };

    wrapper.find(Button).at(1).simulate('click',fakeEvent)
    expect(mockBackFn).toHaveBeenCalled()


})

it("should test if the continue function runs when the next button is clicked", () => {
  const wrapper = shallow(
    <PersonalDetails
      nextStep={jest.fn()}
      handleChange={jest.fn()}
      values={jest.fn()}
    />
  );

  const mockNextFn = jest.fn();
  const fakeEvent = { preventDefault: mockNextFn };

  wrapper.find(Button).at(1).simulate("click", fakeEvent);
  expect(mockNextFn).toHaveBeenCalled();
});

