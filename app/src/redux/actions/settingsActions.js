import {
	ADD_TODO_INPUT_ERROR,
	ADD_TODO_INPUT_VALUE,
	ADD_TODO_LOADING,
	CHOSEN_TODO_ID,
	CHOSEN_TODO_TITLE,
	IS_LOADING_TODOS,
	IS_SORTED_TODOS,
	SEARCH_INPUT_VALUE,
	TOGGLE_MODAL,
} from '../actionTypes/settingsActionTypes';

export const toggleModalAction = (boolean) => ({
	type: TOGGLE_MODAL,
	payload: boolean,
});

export const isSortedTodosAction = (boolean) => ({
	type: IS_SORTED_TODOS,
	payload: boolean,
});

export const isLoadingTodosAction = (boolean) => ({
	type: IS_LOADING_TODOS,
	payload: boolean,
});

export const searchInputValueAction = (value) => ({
	type: SEARCH_INPUT_VALUE,
	payload: value,
});

export const addTodoInputValueAction = (value) => ({
	type: ADD_TODO_INPUT_VALUE,
	payload: value,
});

export const addTodoLoadingAction = (boolean) => ({
	type: ADD_TODO_LOADING,
	payload: boolean,
});

export const addTodoInputErrorAction = (value) => ({
	type: ADD_TODO_INPUT_ERROR,
	payload: value,
});

export const chosenTodoIdAction = (todoId) => ({
	type: CHOSEN_TODO_ID,
	payload: todoId,
});

export const chosenTodoTitleAction = (todoTitle) => ({
	type: CHOSEN_TODO_TITLE,
	payload: todoTitle,
});
