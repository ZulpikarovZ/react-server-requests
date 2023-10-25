import { useState } from 'react';

export const useSortList = (setTodos, todos, isSorted, setIsSorted) => {
	const [copyTodos, setCopyTodos] = useState([]);

	const sortHandler = () => {
		if (!isSorted) {
			setCopyTodos([...todos]);
			setTodos(
				todos.sort((a, b) =>
					a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
				),
			);
			setIsSorted(true);
		} else {
			setTodos([...copyTodos]);
			setIsSorted(false);
		}
	};

	return { sortHandler, setIsSorted, isSorted };
};
