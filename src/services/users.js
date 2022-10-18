import axios from 'axios';
const URL_API = 'http://localhost:5000';

export const getLogin = async (username, password) => {
    try {
        const {data} = await axios.get(`${URL_API}/users?user=${username}&password=${password}`)
        return data;
    } catch (error) {
        return error
    }
}

export const createUser = async (user) => {
    try {
        const {data} = await axios.post(`${URL_API}/users`, user)
        return data;
    } catch (error) {
        return error
    }
}