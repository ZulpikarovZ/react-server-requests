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

const initState = {
	isShowModal: false,
	isSortedTodos: false,
	isLoadingTodos: true,
	searchInputValue: '',
	addTodoInputValue: '',
	addTodoLoading: false,
	addTodoInputError: '',
	chosenTodoId: '',
	chosenTodoTitle: '',
	aphorism: '',
};

export const settingsReducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case TOGGLE_MODAL:
			return { ...state, isShowModal: payload };

		case IS_SORTED_TODOS:
			return { ...state, isSortedTodos: payload };

		case IS_LOADING_TODOS:
			return { ...state, isLoadingTodos: payload };

		case SEARCH_INPUT_VALUE:
			return { ...state, searchInputValue: payload };

		case ADD_TODO_INPUT_VALUE:
			return { ...state, addTodoInputValue: payload };

		case ADD_TODO_LOADING:
			return { ...state, addTodoLoading: payload };

		case ADD_TODO_INPUT_ERROR:
			return { ...state, addTodoInputError: payload };

		case CHOSEN_TODO_ID:
			return { ...state, chosenTodoId: payload };

		case CHOSEN_TODO_TITLE:
			return { ...state, chosenTodoTitle: payload };

		default:
			return state;
	}
};
