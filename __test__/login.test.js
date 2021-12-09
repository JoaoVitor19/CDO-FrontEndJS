/* global __DEV__ */
import React from 'react'
import { render } from '@testing-library/react-native'
import Relatorio from '../screens/Relatorios/Relatorios'
// const {Relatorio} = require('../screens/Relatorios/Relatorios')

jest.mock('../screens/Relatorios/Relatorios', () => '../screens/Relatorios/Relatorios');


describe('Login', () => {
    test('should render', () => {
        const navigation = { navigate: () => { } }
        const { toJSON } = render(<Relatorio />)

        expect(toJSON()).toMatchSnapshot()
    })
})

// it('works', () => {
//     expect(1).toBe(1);
//   });