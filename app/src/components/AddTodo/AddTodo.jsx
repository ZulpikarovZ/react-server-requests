import styles from './AddTodo.module.css';

export const AddTodo = ({ requestAddTodo, inputValue, setInputValue, addTodoError }) => {
	return (
		<div className={styles.newTask}>
			<input
				onSubmit={requestAddTodo}
				className={styles.inputTask}
				type="text"
				placeholder={addTodoError || 'New todo...'}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className={styles.btnTask} type="submit" onClick={requestAddTodo}>
				Add Task
			</button>
		</div>
	);
};
