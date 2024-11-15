// // src/hooks/useAuth.js
// import { useState, useEffect } from 'react';
// import axios from 'axios'; // Импортируем axios для HTTP-запросов
//
// axios.defaults.baseURL = 'http://localhost:3000';
//
// export const useAuth = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null); // Указываем тип состояния как строка или null
//
//     useEffect(() => {
//         const loadUser = async () => {
//             try {
//                 // Проверка авторизации на сервере
//                 const token = localStorage.getItem('token');
//                 if (token) {
//                     const response = await axios.get('/api/v1/user/check', {
//                         headers: {
//                             Authorization: `Bearer ${token}` // Отправляем JWT в заголовке
//                         }
//                     });
//                     if (response.data.authenticated) {
//                         setUser(response.data.user); // Сохраняем данные о пользователе
//                     } else {
//                         setUser(null); // Если не авторизован, очищаем данные о пользователе
//                     }
//                 } else {
//                     setUser(null); // Если нет токена, очищаем данные о пользователе
//                 }
//             } catch (err) {
//                 console.error('Ошибка при проверке сессии:', err);
//                 setError('Ошибка проверки сессии'); // Устанавливаем строку ошибки
//             } finally {
//                 setLoading(false); // Заканчиваем загрузку
//             }
//         };
//
//         loadUser();
//     }, []);
//
//     // Функция для авторизации
//     const login = async (name, password) => {
//         try {
//             const response = await axios.post('/api/v1/user/login', { name, password });
//             if (response.data.success) {
//                 const { token, user } = response.data; // Получаем JWT и данные пользователя
//                 localStorage.setItem('token', token); // Сохраняем JWT в localStorage
//                 setUser(user);
//                 setError(null); // Очищаем ошибки
//             } else {
//                 setError('Неверный логин или пароль');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Ошибка при авторизации'); // Устанавливаем строку ошибки
//             console.error('Ошибка при авторизации', err);
//         }
//     };
//
//     // Функция для регистрации
//     const register = async (name, password, mail) => {
//         try {
//             const response = await axios.post('/api/v1/user/register', { name, password, mail });
//             if (response.data.success) {
//                 const { token, user } = response.data; // Получаем JWT и данные пользователя
//                 localStorage.setItem('token', token); // Сохраняем JWT в localStorage
//                 setUser(user);
//                 setError(null); // Очищаем ошибки
//             } else {
//                 setError('Ошибка регистрации. Попробуйте еще раз.');
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || 'Ошибка при регистрации'); // Устанавливаем строку ошибки
//             console.error('Ошибка при регистрации', err);
//         }
//     };
//
//     // Функция для выхода из аккаунта
//     const logout = async () => {
//         try {
//             localStorage.removeItem('token'); // Удаляем токен из localStorage
//             setUser(null); // Очищаем данные о пользователе
//         } catch (err) {
//             console.error('Ошибка при выходе:', err);
//         }
//     };
//
//     return { user, loading, error, login, register, logout };
// };
