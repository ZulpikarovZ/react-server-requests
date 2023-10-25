import { useState } from 'react';

export const useRequestUpdateTodo = (setIsShowModal, setTodos) => {
	const [error, setError] = useState('');

	const requestUpdateTodo = (todoId, todoTitle) => {
		setIsShowModal(false);

		fetch(`http://localhost:3004/todos/${todoId}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoTitle.trim(),
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setTodos((prev) =>
					[...prev].map((el) => {
						if (el.id === todoId) el.title = response.title.trim();
						return el;
					}),
				);
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
