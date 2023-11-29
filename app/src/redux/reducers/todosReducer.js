import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	GET_ASYNC_TODOS,
	GET_TODOS,
	SORTING_TODOS,
} from '../actionTypes/todosActionTypes';

const initState = [];

export const todosReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_TODOS:
			return payload;

		case SORTING_TODOS:
			return [...state].sort((a, b) =>
				a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
			);

		case ADD_TODO:
			return [...state, payload];

		case EDIT_TODO:
			return [...state].map((todo) => {
				if (todo.id === payload.id) todo.title = payload.title.trim();
				return todo;
			});

		case DELETE_TODO:
			return [...state].filter((todo) => todo.id !== payload);

		//thunk
		case GET_ASYNC_TODOS:
			return [...payload];

		default:
			return state;
	}
};
