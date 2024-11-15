import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/auth/useLogin.tsx';
import { useRegister } from '../hooks/auth/useRegister.tsx';
import { useValidation } from '../hooks/useValidation';
import { Alert, Button, Form } from 'react-bootstrap';
import '../styles/auth.css'

const Auth = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const { login, error: loginError } = useLogin();
    const { register, error: registerError } = useRegister();
    const { message, variant, validateInput } = useValidation(username, password, confirmPassword, email, isLogin);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateInput()) {
            if (isLogin) {
                await login(username, password);
                if (!loginError) navigate('/account'); // Переход на страницу аккаунта после успешного входа
            } else {
                await register(username, password, email);
                if (!registerError) navigate('/account'); // Переход на страницу аккаунта после успешной регистрации
            }
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Войти' : 'Зарегистрироваться'}</h2>
            {(loginError || registerError) && <Alert variant="danger">{loginError || registerError}</Alert>}
            {message && <Alert variant={variant}>{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                {!isLogin && (
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                )}

                <Form.Group className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {!isLogin && (
                    <Form.Group className="mb-3">
                        <Form.Label>Подтвердите пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Подтвердите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                )}

                <Button variant="primary" type="submit">
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>

                <Button
                    variant="link"
                    onClick={() => setIsLogin((prevState) => !prevState)}
                    className="mt-3"
                >
                    {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
                </Button>
            </Form>
        </div>
    );
};

export default Auth;
