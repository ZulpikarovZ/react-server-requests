import styles from './TodoList.module.css';
import { useContext } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Modal } from '../Modal/Modal';
import { AddTodo } from '../AddTodo/AddTodo';
import { Search } from '../Search/Search';
import { todoContext } from '../../context/AppContext';
import sortIco from '../../assets/sort.png';
import closeIco from '../../assets/close.png';

export const TodoList = () => {
	const {
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
	} = useContext(todoContext);

	return (
		<>
			{isLoading ? (
				<div>Загрузка...</div>
			) : isShowModal ? (
				<Modal requestUpdateTodo={requestUpdateTodo} todoId={todoId} />
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
