import styles from './TodoList.module.css';
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
	const { todos, setTodos, refreshTodosList } = useRequestGetTodos();

	const { requestAddTodo, inputValue, setInputValue } = useRequestAddTodo();

	const { requestUpdateTodo, isShowModal, setIsShowModal } = useRequestUpdateTodo();

	const { requestDeliteTodo, todoId, setTodoId } = useRequestDeleteTodo();

	const { sortHandler, isSorted } = useSortList(setTodos, todos, refreshTodosList);

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
					{Object.entries(filteredTodos).length ? (
						<ul className={styles.list}>
							{Array.isArray(filteredTodos)
								? filteredTodos.map(([id, todo]) => (
										<TodoItem
											key={id}
											id={id}
											todo={todo}
											requestDeliteTodo={requestDeliteTodo}
											setIsShowModal={setIsShowModal}
											setTodoId={setTodoId}
										/>
								  ))
								: Object.entries(filteredTodos).map(([id, todo]) => (
										<TodoItem
											key={id}
											id={id}
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
