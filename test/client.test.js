/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../src/redux/store/index';
import { Provider } from 'react-redux';


import App from '../src/App.js';

const Component = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

beforeEach(() => {
    render(<Component />)
})

test('should render component', () => {
    const title = screen.getByText(/reverse text/i);
    expect(title).toBeInTheDocument()
});

test('should response text reverse', async() => {
    const input = screen.getByLabelText(/insert text/i)
    const button = screen.getByRole("button", {name: /send/i})
    fireEvent.change(input, { target: { value: 'Carretilla'}})
    fireEvent.click(button)
    const cardText = await screen.findByText(/text:/i, { selector: 'span'})
    expect(cardText).toBeInTheDocument()
    expect(cardText).toHaveTextContent(/alliterrac/i)
})

test('should render svg cancel', async() => {
    const input = screen.getByLabelText(/insert text/i)
    const button = screen.getByRole("button", {name: /send/i})
    fireEvent.change(input, { target: { value: 'Carretilla'}})
    fireEvent.click(button)
    const palindrome = await screen.findByTestId("cancel")
    expect(palindrome).toBeInTheDocument()
});

test('should render svg check', async() => {
    const input = screen.getByLabelText(/insert text/i)
    const button = screen.getByRole("button", {name: /send/i})
    fireEvent.change(input, { target: { value: 'Luz azul'}})
    fireEvent.click(button)
    const palindrome = await screen.findByTestId("check")
    expect(palindrome).toBeInTheDocument()
});




