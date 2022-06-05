import { configureStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
		return {
			counter: state.counter + 1
		}
	}

	if (action.type === 'decrement'){
		counter: state.counter - 1
	}

	return state;
};

const store = configureStore(counterReducer)

export default store;