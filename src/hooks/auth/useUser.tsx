// // src/hooks/auth/useUser.tsx
// import { useState, useEffect } from 'react';
// import axios from '../../axiosConfig.ts';
//
// export const useUser = () => {
//     const [user, setUser] = useState<any | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 if (token) {
//                     const response = await axios.get('/api/v1/user/check', {
//                         headers: { Authorization: `Bearer ${token}` },
//                     });
//                     if (response.data.authenticated) {
//                         setUser(response.data.user);
//                     } else {
//                         setUser(null);
//                     }
//                 } else {
//                     setUser(null);
//                 }
//             } catch (err) {
//                 setError('Ошибка при загрузке пользователя');
//                 setUser(null);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchUser();
//     }, []);
//
//     return { user, loading, error };
// };
