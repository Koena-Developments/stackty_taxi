import axios from 'axios';

const API_URL = 'http://localhost:8000/'; 

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}login/`, { username, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error.response.data);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const token = localStorage.getItem('token');
        await axios.post(`${API_URL}logout/`, {}, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        localStorage.removeItem('token');
    } catch (error) {
        console.error("Logout failed:", error);
        throw error;
    }
};
