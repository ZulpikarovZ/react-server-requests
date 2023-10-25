import { useState } from 'react';

export const useRequestAddTodo = (setTodos) => {
	const [inputValue, setInputValue] = useState('');
	const [isAddTodoLoading, setIsAddTodoLoading] = useState(false);
	const [error, setError] = useState('');
	const [addTodoError, setAddTodoError] = useState('');

	const requestAddTodo = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			setIsAddTodoLoading(true);
			fetch('http://localhost:3004/todos', {
				method: 'POST',
				headers: { 'Content-type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: inputValue.trim(),
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
					setTodos((prev) => [...prev, response]);
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
					setInputValue('');
					setAddTodoError('');
					setIsAddTodoLoading(false);
				});
		} else {
			setAddTodoError('Empty value incorrect!');
			setInputValue('');
		}
	};

	return { requestAddTodo, inputValue, setInputValue, isAddTodoLoading, addTodoError };
};
