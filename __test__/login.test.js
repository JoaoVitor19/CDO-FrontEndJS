import {render, screen} from '@testing-library/react-native'
import { BrowserRouter } from 'react-router-dom'
import Login from '../screens/Login/Login'



const MockFormulario = () => {
    return (
        <BrowserRouter>
        <Login/>
        </BrowserRouter>
    )

    }

test('testando formulario', async () => {
    render(<MockFormulario/>)
    const emailElement = await screen.findByTestId(/email/i)
    const senhaElement = await screen.findByTestId(/senha/i)

    screen.debug()
    expect(emailElement).toBeInTheDocument()
    expect(senhaElement).toBeInTheDocument()
})