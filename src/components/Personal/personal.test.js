import React from 'react'
import {shallow} from 'enzyme'
import PersonalDetails from './personal-component'
import Form from '../Form/form-component'


it('Correctly renders PersonalDetails component', ()=> {
   expect(shallow(<PersonalDetails values={jest.fn()} handleChange={jest.fn()} />)).toMatchSnapshot()
})

const wrapper = shallow(<PersonalDetails handleChange={jest.fn()} values={jest.fn()}/>)




// expect(wrapper.find('[id="input"]').exists()).toBe(true);

wrapper.find('[id="input"]').simulate('change');
expect(wrapper.state()).toEqual({firstName: 'New value'});
