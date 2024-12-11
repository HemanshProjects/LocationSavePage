import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

export const getAddresses = () => API.get('/addresses');
export const saveAddress = (data) => API.post('/addresses', data);
export const updateAddress = (id, data) => API.put(`/addresses/${id}`, data);
export const deleteAddress = (id) => API.delete(`/addresses/${id}`);
