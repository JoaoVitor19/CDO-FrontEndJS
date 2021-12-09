/* global __DEV__ */
import React from 'react'
import { render } from '@testing-library/react-native'
import Login from '../screens/Login/Login'
// const {Relatorio} = require('../screens/Relatorios/Relatorios')

jest.mock('../screens/Login/Login', () => '../screens/Login/Login');


describe('Login', () => {
    test('should render', () => {
        const navigation = { navigate: () => { } }
        const { toJSON } = render(<Login />)

        expect(toJSON()).toMatchSnapshot()
    })
})

// it('works', () => {
//     expect(1).toBe(1);
//   });