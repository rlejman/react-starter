import { AuthState } from '@auth';

export enum Store {
	AUTH = 'auth',
}

export type StoreRootType = {
	[Store.AUTH]: AuthState;
};
