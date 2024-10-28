import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ViewModal from './ViewModal';

describe('ViewModal Component', () => {
  const mockCapsule = {
    capsule_serial: 'C101',
    status: 'active',
    original_launch: '2023-01-01T00:00:00Z',
    type: 'Dragon 1.1',
  };
  const mockOnClose = jest.fn();

  test('renders with capsule details', () => {
    render(<ViewModal selectedCapsule={mockCapsule} onClose={mockOnClose} />);

    // Check if the modal header and close button are present
    expect(screen.getByText(/Capsule Details/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();

    // Verify capsule data fields
    expect(screen.getByText(/Capsule Serial:/i)).toBeInTheDocument();
    expect(screen.getByText(mockCapsule.capsule_serial)).toBeInTheDocument();
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
    expect(screen.getByText(mockCapsule.status)).toBeInTheDocument();
    expect(screen.getByText(/Original Launch:/i)).toBeInTheDocument();
    expect(screen.getByText('1/1/2023')).toBeInTheDocument(); // Ensure date formatting matches
    expect(screen.getByText(/Type:/i)).toBeInTheDocument();
    expect(screen.getByText(mockCapsule.type)).toBeInTheDocument();
  });

  test('calls onClose when the close button is clicked', () => {
    render(<ViewModal selectedCapsule={mockCapsule} onClose={mockOnClose} />);

    // Simulate clicking the close button
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));
    
    // Verify that onClose function is called once
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});