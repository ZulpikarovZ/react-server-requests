import { useEffect, useState } from 'react';

export const useRequestGetTodos = (setIsSorted, refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:3004/todos')
				.then((resp) => resp.json())
				.then((todosFromServer) => {
					setTodos(todosFromServer);
					setIsSorted(false);
				});
		}, 10);
	}, [refreshTodosFlag]);

	return { todos, setTodos };
};
