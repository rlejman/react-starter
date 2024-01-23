export const handleError = (error: unknown): Error => {
	if (error instanceof Error) {
		return new Error(error.message || 'Unexpected error');
	}
	return new Error('Unexpected error');
};
