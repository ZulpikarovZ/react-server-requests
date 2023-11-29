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
import { useSelector } from 'react-redux';
import {
	isLoadingTodosSelector,
	isShowModalSelector,
	isSortedTodosSelector,
} from '../../redux/selectors/settingsSelectors';

export const TodoList = () => {
	const isShowModal = useSelector(isShowModalSelector);
	const isSortedTodos = useSelector(isSortedTodosSelector);
	const isLoadingTodos = useSelector(isLoadingTodosSelector);

	useRequestGetTodos();

	const { requestAddTodo } = useRequestAddTodo();

	const { requestUpdateTodo } = useRequestUpdateTodo();

	const { requestDeliteTodo } = useRequestDeleteTodo();

	const { sortHandler } = useSortList();

	const { filteredTodos } = useSearchTodos();

	return (
		<>
			{isLoadingTodos ? (
				<div>Загрузка...</div>
			) : isShowModal ? (
				<Modal requestUpdateTodo={requestUpdateTodo} />
			) : (
				<form className={styles.wrap}>
					<Search />
					<h1 className={styles.title}>TODO List</h1>
					<AddTodo requestAddTodo={requestAddTodo} />
					<li className={styles.headerList}>
						<div>#</div>
						<div>
							Task Name
							<span>
								<img
									src={isSortedTodos ? closeIco : sortIco}
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
