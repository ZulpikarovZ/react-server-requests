import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	GET_ASYNC_TODOS,
	GET_TODOS,
	SORTING_TODOS,
} from '../actionTypes/todosActionTypes';

export const getTodosAction = (todos) => ({
	type: GET_TODOS,
	payload: todos,
});

export const sortingTodosAction = () => ({
	type: SORTING_TODOS,
});

export const addTodoAction = (todo) => ({
	type: ADD_TODO,
	payload: todo,
});

export const editTodoAction = (todo) => ({
	type: EDIT_TODO,
	payload: todo,
});

export const deleteTodoAction = (id) => ({
	type: DELETE_TODO,
	payload: id,
});

//thunk
export const getAsyncTodosAction = () => {
	return (dispatch) => {
		const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

		fetch(url)
			.then((response) => response.json())
			.then((dataFromServer) =>
				dispatch({ type: GET_ASYNC_TODOS, payload: dataFromServer }),
			);
	};
};
