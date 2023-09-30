import { useState } from 'react';
import { useDebounce } from './use-debounce';

export const useSearchTodos = (todos) => {
	const [searchValue, setSearchValue] = useState('');

	const filterTodos = (searchText, todoList) => {
		if (!searchText) {
			return todoList;
		}
		return todoList.filter((todo) =>
			todo.title.toLowerCase().includes(searchText.toLowerCase()),
		);
	};

	const debouncedSearchValue = useDebounce(searchValue, 300);

	const filteredTodos = filterTodos(debouncedSearchValue, todos);

	return { filteredTodos, searchValue, setSearchValue };
};
