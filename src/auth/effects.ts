import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials } from './types';
import { login } from './authService';

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (credentials: LoginCredentials) => {
		const token = await login(credentials);
		return token;
	}
);
