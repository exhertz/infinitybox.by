import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CatalogPage from './pages/CatalogPage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import './App.css';
import './styles/global.css';
import { ProductProvider } from './contexts/ProductContext';
import { useSessionCheck } from './hooks/auth/useSessionCheck.tsx';

function App() {
    const { user, loading, error } = useSessionCheck();

    useEffect(() => {
        if (loading) return; // Пока идет проверка, ничего не выводим
        if (error) {
            console.error('Ошибка проверки сессии:', error); // Обработка ошибки сессии
        }
    }, [loading, error]);

    return (
        <ProductProvider>
            <CartProvider>
                <Router>
                    <div id="root">
                        <Header />
                        <div className="main-content">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/catalog" element={<CatalogPage />} />
                                <Route path="/product/:id" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/auth" element={<Auth />} />
                                <Route path="/account" element={<PrivateRoute><Account user={user} /></PrivateRoute>} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </ProductProvider>
    );
}

export default App;
