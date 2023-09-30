import { useState } from 'react';

export const useRequestDeleteTodo = (refreshTodosList) => {
	const [todoId, setTodoId] = useState('');

	const requestDeliteTodo = (id) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => console.log('TODO is delited!'), refreshTodosList())
			.finally();
	};

	return { requestDeliteTodo, todoId, setTodoId };
};
