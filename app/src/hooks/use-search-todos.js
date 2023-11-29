import { searchInputValueSelector } from '../redux/selectors/settingsSelectors';
import { todosSelector } from '../redux/selectors/todosSelectors';
import { useDebounce } from './use-debounce';
import { useSelector } from 'react-redux';

export const useSearchTodos = () => {
	const searchInputValue = useSelector(searchInputValueSelector);
	const todos = useSelector(todosSelector);

	const filterTodos = (searchText, todoList) => {
		if (!searchText) {
			return todoList;
		}
		return todoList.filter((todo) =>
			todo.title.toLowerCase().includes(searchText.toLowerCase()),
		);
	};

	const debouncedSearchValue = useDebounce(searchInputValue, 300);

	const filteredTodos = filterTodos(debouncedSearchValue, todos);

	return { filteredTodos };
};
