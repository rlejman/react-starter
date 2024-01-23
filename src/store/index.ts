import { store } from './store';

/**
 * Exports
 */
export { store };
export type AppDispatch = typeof store.dispatch;
export type { StoreRootType } from './storeTypes';
