import { useState } from 'react';
import { useDebounce } from './use-debounce';

export const useSearchTodos = (todos) => {
	const [searchValue, setSearchValue] = useState('');

	const filterTodos = (searchText, todoList) => {
		if (!searchText) {
			return todoList;
		}
		return Array.isArray(todoList)
			? todoList.filter((todo) =>
					todo[1].title.toLowerCase().includes(searchText.toLowerCase()),
			  )
			: Object.entries(todoList).filter((todo) =>
					todo[1].title.toLowerCase().includes(searchText.toLowerCase()),
			  );
	};

	const debounceValue = useDebounce(searchValue, 300);

	const filteredTodos = filterTodos(debounceValue, todos);

	return { filteredTodos, searchValue, setSearchValue };
};
