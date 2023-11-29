import { addTodoInputValueAction } from '../../redux/actions/settingsActions';
import {
	addTodoInputErrorSelector,
	addTodoInputValueSelector,
	addTodoLoadingSelector,
} from '../../redux/selectors/settingsSelectors';
import styles from './AddTodo.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const AddTodo = ({ requestAddTodo }) => {
	const dispatch = useDispatch();
	const addTodoInputError = useSelector(addTodoInputErrorSelector);
	const addTodoInputValue = useSelector(addTodoInputValueSelector);
	const addTodoLoading = useSelector(addTodoLoadingSelector);

	return (
		<div className={styles.newTask}>
			<input
				onSubmit={requestAddTodo}
				className={styles.inputTask}
				type="text"
				placeholder={addTodoInputError || 'New todo...'}
				value={addTodoInputValue}
				onChange={(e) => dispatch(addTodoInputValueAction(e.target.value))}
			/>
			<button
				className={styles.btnTask}
				type="submit"
				onClick={requestAddTodo}
				disabled={addTodoLoading}
			>
				Add Task
			</button>
		</div>
	);
};
