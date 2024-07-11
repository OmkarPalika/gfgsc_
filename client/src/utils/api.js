import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, config = {}) => {
    try {
        const response = await api.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const post = async (url, data, config = {}) => {
    try {
        const response = await api.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const put = async (url, data, config = {}) => {
    try {
        const response = await api.put(url, data, config);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const del = async (url, config = {}) => {
    try {
        const response = await api.delete(url, config);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};
