import styles from './TodoList.module.css';
import { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Modal } from '../Modal/Modal';
import { AddTodo } from '../AddTodo/AddTodo';
import { Search } from '../Search/Search';
import sortIco from '../../assets/sort.png';
import closeIco from '../../assets/close.png';
import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
	useSearchTodos,
} from '../../hooks';
import { useSortList } from '../../hooks/use-sort-list';

export const TodoList = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isShowModal, setIsShowModal] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	const refreshTodosList = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { todos, setTodos } = useRequestGetTodos(setIsSorted, refreshTodosFlag);

	const { requestAddTodo, inputValue, setInputValue } =
		useRequestAddTodo(refreshTodosList);

	const { requestUpdateTodo } = useRequestUpdateTodo(setIsShowModal, refreshTodosList);

	const { requestDeliteTodo, todoId, setTodoId } =
		useRequestDeleteTodo(refreshTodosList);

	const { sortHandler } = useSortList(
		setTodos,
		todos,
		refreshTodosList,
		isSorted,
		setIsSorted,
	);

	const { filteredTodos, searchValue, setSearchValue } = useSearchTodos(todos);

	return (
		<>
			{isShowModal ? (
				<Modal requestUpdateTodo={requestUpdateTodo} todoId={todoId} />
			) : (
				<form className={styles.wrap}>
					<Search searchValue={searchValue} setSearchValue={setSearchValue} />
					<h1 className={styles.title}>TODO List</h1>
					<AddTodo
						requestAddTodo={requestAddTodo}
						inputValue={inputValue}
						setInputValue={setInputValue}
					/>
					<li className={styles.headerList}>
						<div>#</div>
						<div>
							Task Name
							<span>
								<img
									src={isSorted ? closeIco : sortIco}
									alt=""
									onClick={sortHandler}
								/>
							</span>
						</div>
						<div>Edit</div>
						<div>Del</div>
					</li>
					{filteredTodos.length ? (
						<ul className={styles.list}>
							{filteredTodos.map((todo) => (
								<TodoItem
									key={todo.id}
									todo={todo}
									requestDeliteTodo={requestDeliteTodo}
									setIsShowModal={setIsShowModal}
									setTodoId={setTodoId}
								/>
							))}
						</ul>
					) : (
						<p className={styles.text}>No Todos!</p>
					)}
				</form>
			)}
		</>
	);
};
