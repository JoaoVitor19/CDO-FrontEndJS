/* global __DEV__ */
import React from 'react'
import { render } from '@testing-library/react-native'
//import Relatorio from '../screens/Relatorios/Relatorios'
const {Relatorio} = require('../screens/Relatorios/Relatorios')
describe('Login', () => {
    test('should render', () => {
        const navigation = { navigate: () => { } }
        const { toJSON } = render(<Relatorio navigation={navigation} />)

        expect(toJSON()).toMatchSnapshot()
    })
})