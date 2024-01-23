import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { reducers } from './reducers';
import * as effects from '../effects';

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers,
});

const { reducer, actions } = authSlice;
export { effects, reducer, actions };
