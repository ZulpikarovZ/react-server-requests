export const useSortList = (setTodos, todos, refreshTodosList, isSorted, setIsSorted) => {
	const sortHandler = () => {
		if (!isSorted) {
			setTodos(
				todos.sort((a, b) =>
					a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
				),
			);
			setIsSorted(true);
		} else {
			refreshTodosList();
			setIsSorted(false);
		}
	};

	return { sortHandler, setIsSorted, isSorted };
};
