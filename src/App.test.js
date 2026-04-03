// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AiTrainingHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AiTrainingHub/i);
    expect(titleElement).toBeInTheDocument();
});
