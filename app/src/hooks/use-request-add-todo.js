import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodoInputErrorAction,
	addTodoInputValueAction,
	addTodoLoadingAction,
} from '../redux/actions/settingsActions';
import { addTodoInputValueSelector } from '../redux/selectors/settingsSelectors';
import { addTodoAction } from '../redux/actions/todosActions';

export const useRequestAddTodo = () => {
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const addTodoInputValue = useSelector(addTodoInputValueSelector);

	const requestAddTodo = (e) => {
		e.preventDefault();
		if (addTodoInputValue.trim()) {
			dispatch(addTodoLoadingAction(true));
			fetch('http://localhost:3004/todos', {
				method: 'POST',
				headers: { 'Content-type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: addTodoInputValue.trim(),
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					dispatch(addTodoAction(response));
					console.log(
						'new TODO added successfully! Server response: ',
						response,
					);
				})
				.catch((err) => {
					setError(err);
					console.log('Error adding todo: ', error);
				})
				.finally(() => {
					dispatch(addTodoInputValueAction(''));
					dispatch(addTodoInputErrorAction(''));
					dispatch(addTodoLoadingAction(false));
				});
		} else {
			dispatch(addTodoInputErrorAction('Empty value incorrect!'));
			dispatch(addTodoInputValueAction(''));
		}
	};

	return { requestAddTodo };
};
