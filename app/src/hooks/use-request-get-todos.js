import { useEffect, useState } from 'react';

export const useRequestGetTodos = (setIsSorted) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3004/todos')
			.then((resp) => resp.json())
			.then((todosFromServer) => {
				setTodos(todosFromServer);
				setIsSorted(false);
			})
			.catch((err) => {
				setError(err);
				console.log('Error getting todos: ', error);
			})
			.finally(() => setIsLoading(false));
	}, [error, setIsSorted]);

	return { todos, setTodos, isLoading };
};
