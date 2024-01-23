import axios from 'axios';
import { getAuthToken } from '@auth';
import { URL } from '@shared/consts';

export const apiConfig = axios.create({
	baseURL: URL,
});

apiConfig.interceptors.request.use(
	async (config) => {
		const modifiedConfig = { ...config };
		const token = getAuthToken();

		modifiedConfig.headers['Content-Type'] = 'application/json';

		if (!modifiedConfig.headers.Authorization && token) {
			modifiedConfig.headers.Authorization = `Bearer ${token}`;
		}

		return modifiedConfig;
	},
	(error) => Promise.reject(error)
);
