import { handleError, post } from 'src/shared';
import { LoginCredentials } from './types';

const PATH = '/api/login';

export const login = async (credentials: LoginCredentials): Promise<string> => {
	try {
		const { username, password } = credentials;
		const data = await post<{ token: string }, LoginCredentials>(PATH, {
			username,
			password,
		});
		return data.token;
	} catch (error) {
		throw handleError(error);
	}
};
