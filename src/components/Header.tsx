import React from 'react';
import { Navbar, Nav, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useSessionCheck } from '../hooks/auth/useSessionCheck'; // Хук для проверки сессии
import { useLogout } from '../hooks/auth/useLogout'; // Хук для выхода

const Header: React.FC = () => {
    const { getTotalItems } = useCart();
    const { user, loading } = useSessionCheck(); // Получаем информацию о пользователе
    const { logout } = useLogout(); // Хук для выхода из системы
    const totalItems = getTotalItems();

    if (loading) return null; // Пока идет проверка сессии, ничего не отображаем

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Logo soon</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto flex-grow-1 justify-content-end">
                        <Nav.Item className="mr-3">
                            <Link to="/catalog" className="nav-link">Каталог товаров</Link>
                        </Nav.Item>

                        {!user ? (
                            <Nav.Item className="mr-3">
                                <Link to="/auth" className="nav-link">Войти / Регистрация</Link>
                            </Nav.Item>
                        ) : (
                            <>
                                <Nav.Item className="mr-3">
                                    <Link to="/account" className="nav-link">Личный кабинет</Link>
                                </Nav.Item>
                                <Nav.Item className="mr-3">
                                    <span onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                                        Выйти
                                    </span>
                                </Nav.Item>
                            </>
                        )}

                        <Nav.Item>
                            <Link to="/cart" className="nav-link d-flex align-items-center">
                                Корзина
                                {totalItems > 0 && (
                                    <Badge pill bg="danger" className="ml-2">
                                        {totalItems}
                                    </Badge>
                                )}
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
