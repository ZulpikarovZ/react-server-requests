import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLoadingTodosAction } from '../redux/actions/settingsActions';
import { getAsyncTodosAction, getTodosAction } from '../redux/actions/todosActions';

export const useRequestGetTodos = () => {
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLoadingTodosAction(true));
		// dispatch(getAsyncTodosAction());// example thunk → for async query on api

		fetch('http://localhost:3004/todos')
			.then((resp) => resp.json())
			.then((todosFromServer) => {
				dispatch(getTodosAction(todosFromServer));
			})
			.catch((err) => {
				setError(err);
				console.log('Error getting todos: ', error);
			})
			.finally(() => dispatch(isLoadingTodosAction(false)));
	}, [error, dispatch]);

	return;
};
