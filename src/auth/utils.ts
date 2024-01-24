export const getAuthToken = (): string | null => localStorage.getItem('token');
export const setAuthToken = (value: string): void =>
	localStorage.setItem('token', value);
