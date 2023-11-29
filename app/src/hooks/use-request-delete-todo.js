import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAction } from '../redux/actions/todosActions';

export const useRequestDeleteTodo = () => {
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	const requestDeliteTodo = (id) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				dispatch(deleteTodoAction(id));
				console.log('TODO is delited!');
			})
			.catch((err) => {
				setError(err);
				console.log('Error deleting todo: ', error);
			})
			.finally();
	};

	return { requestDeliteTodo };
};
