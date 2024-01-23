import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from '@auth';
import { Store, StoreRootType } from './storeTypes';

export const store = configureStore<StoreRootType>({
	reducer: { [Store.AUTH]: authReducer },
});
