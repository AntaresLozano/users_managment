import { User } from '../models';
import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const getUsersRequest = async () => await axios.get(`${baseURL}/users`);
export const CreateUserRequest = async (user: User) => await axios.post(`${baseURL}/user`, user);
export const DeleteUserRequest = async (id: number) => await axios.delete(`${baseURL}/user/${id}`);
export const EditUserRequest = async (id: number, newFields: User) => await axios.put(`${baseURL}/user/${id}`, newFields);
