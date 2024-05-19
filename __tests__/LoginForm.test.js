import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '../src/components/Login/LoginForm.tsx';

describe('LoginForm Component', () => {
  it('renders form correctly', () => {
    render(<LoginForm onLogin={() => {}} errorMessage={null} />);
    
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
  });

  it('calls onLogin with email and password when submitted', () => {
    const mockLogin = jest.fn();
    render(<LoginForm onLogin={mockLogin} errorMessage={null} />);

    fireEvent.change(screen.getByLabelText('E-mail:'), { target: { value: 'cliente@youdrive.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

    expect(mockLogin).toHaveBeenCalledWith('cliente@youdrive.com', 'password');
  });

  it('displays error message if errorMessage prop is provided', () => {
    const errorMessage = 'Invalid credentials';
    render(<LoginForm onLogin={() => {}} errorMessage={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});