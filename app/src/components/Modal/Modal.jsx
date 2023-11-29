import styles from './Modal.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
	chosenTodoIdSelector,
	chosenTodoTitleSelector,
} from '../../redux/selectors/settingsSelectors';

export const Modal = ({ requestUpdateTodo }) => {
	const chosenTodoTitle = useSelector(chosenTodoTitleSelector);
	const chosenTodoId = useSelector(chosenTodoIdSelector);
	const [inputValue, setInputValue] = useState(chosenTodoTitle);

	return (
		<div className={styles.modal}>
			<input
				className={styles.input}
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="new value"
			/>
			<button
				className={styles.btn}
				type="button"
				onClick={() => requestUpdateTodo(chosenTodoId, inputValue)}
			>
				Edit
			</button>
		</div>
	);
};
