import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalAction } from '../redux/actions/settingsActions';
import { editTodoAction } from '../redux/actions/todosActions';

export const useRequestUpdateTodo = () => {
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	const requestUpdateTodo = (todoId, todoTitle) => {
		dispatch(toggleModalAction(false));

		fetch(`http://localhost:3004/todos/${todoId}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoTitle.trim(),
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				dispatch(editTodoAction(response));
				console.log('TODO is updated! Server response: ', response);
			})
			.catch((err) => {
				setError(err);
				console.log('Error updating todo: ', error);
			})
			.finally();
	};

	return { requestUpdateTodo };
};
