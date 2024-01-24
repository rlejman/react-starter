import { AuthState } from 'src/auth';

export enum Store {
	AUTH = 'auth',
}

export type StoreRootType = {
	[Store.AUTH]: AuthState;
};
