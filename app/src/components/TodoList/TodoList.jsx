import styles from './TodoList.module.css';
import { TodoItem } from '../TodoItem/TodoItem';
import { AddTodo } from '../AddTodo/AddTodo';
import { Search } from '../Search/Search';
import sortIco from '../../assets/sort.png';
import closeIco from '../../assets/close.png';
import { useRequestAddTodo, useRequestGetTodos, useSearchTodos } from '../../hooks';
import { useSortList } from '../../hooks/use-sort-list';

export const TodoList = () => {
	const { todos, setTodos, isLoading } = useRequestGetTodos();

	const { requestAddTodo, inputValue, setInputValue, isAddTodoLoading, addTodoError } =
		useRequestAddTodo(setTodos);

	const { sortHandler, isSorted } = useSortList(setTodos, todos);

	const { filteredTodos, searchValue, setSearchValue } = useSearchTodos(todos);

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<form className={styles.wrap}>
					<Search searchValue={searchValue} setSearchValue={setSearchValue} />
					<h1 className={styles.title}>TODO List</h1>
					<AddTodo
						disabled={isAddTodoLoading}
						requestAddTodo={requestAddTodo}
						inputValue={inputValue}
						setInputValue={setInputValue}
						addTodoError={addTodoError}
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
					</li>
					{filteredTodos.length ? (
						<ul className={styles.list}>
							{filteredTodos.map((todo) => (
								<TodoItem key={todo.id} todo={todo} />
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
