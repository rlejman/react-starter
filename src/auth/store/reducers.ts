import { AuthState } from './types';

export const reducers = {
	logout: (state: AuthState) => {
		state.isAuthenticated = false;
	},
	login: (state: AuthState) => {
		state.isAuthenticated = true;
	},
};
