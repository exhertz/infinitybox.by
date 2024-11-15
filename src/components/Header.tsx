import React, { useState } from 'react';
import { Navbar, Nav, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useSessionCheck } from '../hooks/auth/useSessionCheck'; // Хук для проверки сессии
import { useLogout } from '../hooks/auth/useLogout'; // Хук для выхода
import { FiShoppingCart } from 'react-icons/fi'; // Иконка для корзины

const Header: React.FC = () => {
    const { getTotalItems } = useCart();
    const { user, loading } = useSessionCheck(); // Получаем информацию о пользователе
    const { logout } = useLogout(); // Хук для выхода из системы
    const totalItems = getTotalItems();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Состояние для управления открытием/закрытием меню

    if (loading) return null; // Пока идет проверка сессии, ничего не отображаем

    const handleLinkClick = () => {
        setIsNavbarOpen(false); // Закрываем меню при клике на пункт
    };

    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="shadow-lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="font-weight-bold text-uppercase">
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
                <Navbar.Collapse id="basic-navbar-nav" in={isNavbarOpen}>
                    <Nav className="ml-auto flex-grow-1 justify-content-end">
                        <Nav.Item className="mr-3">
                            <Link to="/catalog" className="nav-link" onClick={handleLinkClick}>Каталог товаров</Link>
                        </Nav.Item>

                        {!user ? (
                            <Nav.Item className="mr-3">
                                <Link to="/auth" className="nav-link" onClick={handleLinkClick}>Войти / Регистрация</Link>
                            </Nav.Item>
                        ) : (
                            <>
                                <Nav.Item className="mr-3">
                                    <Link to="/account" className="nav-link" onClick={handleLinkClick}>Личный кабинет</Link>
                                </Nav.Item>
                                <Nav.Item className="mr-3">
                                    <span onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                                        Выйти
                                    </span>
                                </Nav.Item>
                            </>
                        )}

                        <Nav.Item className="d-flex align-items-center">
                            <Link to="/cart" className="nav-link d-flex align-items-center" onClick={handleLinkClick}>
                                <FiShoppingCart size={24} />
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
