import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestDeleteTodo = (setTodos) => {
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const requestDeliteTodo = (id) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setTodos((prev) => [...prev].filter((todo) => todo.id !== id));
				console.log('TODO is delited!');
			})
			.catch((err) => {
				setError(err);
				console.log('Error deleting todo: ', error);
			})
			.finally(() => navigate('/'));
	};

	return { requestDeliteTodo };
};
