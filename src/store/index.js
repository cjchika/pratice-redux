import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.counter++;
		},
		decrement: state => {
			state.counter--;
		}
	}
});

const initialAuthState = {
	isAuthenticated: false
};

const authSlice = createSlice({
	name: 'authenticated',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false
		}
	}
});

const store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const { increment, decrement } = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;