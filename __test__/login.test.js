import React from 'react'
import { render } from '@testing-library/react-native'
import Login from '../screens/Login/Login'

describe('Login', () => {
    test('should render', () => {
        const navigation = { navigate: () => { } }
        const { toJSON } = render(<Login navigation={navigation} />)

        expect(toJSON()).toMatchSnapshot()
    })
})