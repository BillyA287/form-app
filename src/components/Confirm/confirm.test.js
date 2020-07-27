import React from 'react'
import Confirm from './confirm-component'
import {shallow} from 'enzyme'
import {findTestbyAtrribute} from '../../utils/utils'


// it("Correctly renders Confirm component", () => {

//   expect(shallow(<Confirm firstName={values.firstName} lastName={jest.fn()} email={jest.fn()} occupation={jest.fn()} city={jest.fn()} bio={jest.fn()}/>)).toMatchSnapshot();
// });


const setUp = (props={}) => {
    const component = shallow(<Confirm {...props} />);
    return component
}

describe('Confirm Component', ()=> {

    describe('props passed in', ()=> {

        it('should render without errors', ()=> {
            const props = {
              firstName: "b",
              lastName: "a",
              email: "@",
              occupation: "g",
              city: "d",
              bio: "t",
            };
            const component = shallow(<Confirm values={props} />);
            expect(component.length).toMatchSnapshot()
        })
    })

    describe('no props passed in', ()=> {
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })
    })
})