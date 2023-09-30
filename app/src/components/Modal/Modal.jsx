import styles from './Modal.module.css';
import { useState } from 'react';

export const Modal = ({ requestUpdateTodo, todoId }) => {
	const [inputValue, setInputValue] = useState('');

	const inputHandler = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={styles.modal}>
			<input
				className={styles.input}
				type="text"
				value={inputValue}
				onChange={inputHandler}
				placeholder="new value"
			/>
			<button
				className={styles.btn}
				type="button"
				onClick={() => requestUpdateTodo(todoId, inputValue)}
			>
				Edit
			</button>
		</div>
	);
};
