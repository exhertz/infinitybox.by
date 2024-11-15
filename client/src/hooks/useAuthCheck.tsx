import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAuthCheck = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                try {
                    // Допустим, запрос к серверу подтверждает актуальность данных пользователя
                    const response = await axios.get('/api/auth/validate', {
                        headers: { Authorization: `Bearer ${parsedUser.token}` }
                    });
                    if (response.data.valid) {
                        setUser(parsedUser);
                    } else {
                        localStorage.removeItem('user'); // Очистка, если токен недействителен
                    }
                } catch (error) {
                    console.error('Ошибка проверки токена', error);
                    localStorage.removeItem('user');
                }
            }
            setLoading(false);
        };

        checkUser();
    }, []);

    return { user, loading };
};
