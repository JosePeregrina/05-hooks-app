import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import HookApp from '../HookApp'

describe('El componente <HookApp />', () => {
    test('debe de renderisarse correctamente', () => {
        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();
    })
})
