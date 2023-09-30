import styles from './AddTodo.module.css';

export const AddTodo = ({ requestAddTodo, inputValue, setInputValue }) => {
	return (
		<div className={styles.newTask}>
			<input
				onSubmit={requestAddTodo}
				className={styles.inputTask}
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className={styles.btnTask} type="submit" onClick={requestAddTodo}>
				Add Task
			</button>
		</div>
	);
};
