export const useRequestUpdateTodo = (setIsShowModal, refreshTodosList) => {
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
			.then(
				(response) => console.log('TODO is updated! Server response: ', response),
				refreshTodosList(),
			)
			.finally();
	};

	return { requestUpdateTodo };
};
