import { createContext, useState } from 'react';
import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
	useSearchTodos,
	useSortList,
} from '../hooks';

export const todoContext = createContext(null);

export const AppContextProvider = ({ children }) => {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	const { todos, setTodos, isLoading } = useRequestGetTodos(setIsSorted);

	const { requestAddTodo, inputValue, setInputValue, isAddTodoLoading, addTodoError } =
		useRequestAddTodo(setTodos);

	const { requestUpdateTodo } = useRequestUpdateTodo(setIsShowModal, setTodos);

	const { requestDeliteTodo, todoId, setTodoId } = useRequestDeleteTodo(setTodos);

	const { sortHandler } = useSortList(setTodos, todos, isSorted, setIsSorted);

	const { filteredTodos, searchValue, setSearchValue } = useSearchTodos(todos);

	return (
		<todoContext.Provider
			value={{
				isShowModal,
				setIsShowModal,
				isSorted,
				isLoading,
				requestAddTodo,
				inputValue,
				setInputValue,
				isAddTodoLoading,
				addTodoError,
				requestUpdateTodo,
				requestDeliteTodo,
				todoId,
				setTodoId,
				sortHandler,
				filteredTodos,
				searchValue,
				setSearchValue,
			}}
		>
			{children}
		</todoContext.Provider>
	);
};
