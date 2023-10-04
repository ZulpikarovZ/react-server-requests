import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddTodo = () => {
	const [inputValue, setInputValue] = useState('');

	const requestAddTodo = (e) => {
		const todosDbRef = ref(db, 'todos');
		e.preventDefault();

		if (inputValue.trim()) {
			push(todosDbRef, {
				title: inputValue.trim(),
				id: String(Math.random()).slice(2, 6),
			})
				.then((response) =>
					console.log(
						'new TODO added successfully! Server response: ',
						response,
					),
				)
				.finally(setInputValue(''));
		} else {
			setInputValue('');
		}
	};

	return { requestAddTodo, inputValue, setInputValue };
};
