// src/components/ErrorAlert.tsx
import React from 'react';
import { Alert } from 'react-bootstrap';

interface ErrorAlertProps {
    message?: string;
    variant?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, variant = 'danger' }) => {
    if (!message) return null;

    return (
        <Alert variant={variant} className="error-alert">
            {message}
        </Alert>
    );
};

export default ErrorAlert;
