import React from 'react'
import Success from './success-component'
import {shallow} from 'enzyme'


it('correctly renders Success component', ()=> {
    expect(
      shallow(<Success continue={jest.fn()} back={jest.fn()} />)
    ).toMatchSnapshot();
})

