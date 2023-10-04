import { useState } from 'react';

export const useSortList = (setTodos, todos, refreshTodosList) => {
	const [isSorted, setIsSorted] = useState(false);

	const sortHandler = () => {
		if (!isSorted) {
			setTodos(
				Object.entries(todos).sort((a, b) =>
					a[1].title.toLowerCase() > b[1].title.toLowerCase() ? 1 : -1,
				),
			);
			setIsSorted(true);
		} else {
			refreshTodosList();
			setIsSorted(false);
		}
	};

	return { sortHandler, isSorted };
};
