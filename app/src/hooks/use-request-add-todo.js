import { useState } from 'react';

export const useRequestAddTodo = (refreshTodosList) => {
	const [inputValue, setInputValue] = useState('');

	const requestAddTodo = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			fetch('http://localhost:3004/todos', {
				method: 'POST',
				headers: { 'Content-type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: inputValue.trim(),
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then(
					(response) =>
						console.log(
							'new TODO added successfully! Server response: ',
							response,
						),
					refreshTodosList(),
				)
				.finally(setInputValue(''));
		} else {
			setInputValue('');
		}
	};

	return { requestAddTodo, inputValue, setInputValue };
};
