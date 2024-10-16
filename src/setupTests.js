import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


test('renders LoginPage when navigating to /login', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  fireEvent.click(screen.getByText(/Login/i));  // Assuming "Login" link
  expect(screen.getByText(/Login Form/i)).toBeInTheDocument();  // Assuming a login form text
});
