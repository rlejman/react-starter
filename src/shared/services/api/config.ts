import axios from 'axios';
import URL from '../../consts';
import { getAuthToken } from '../../utils';

const apiConfig = axios.create({
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

export default apiConfig;
