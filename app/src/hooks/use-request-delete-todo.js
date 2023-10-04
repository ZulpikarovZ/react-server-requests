import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTodo = () => {
	const [todoId, setTodoId] = useState('');

	const requestDeliteTodo = (id) => {
		const todoItemDbRef = ref(db, `todos/${id}`);

		remove(todoItemDbRef).then((response) => console.log('TODO is delited!'));
	};

	return { requestDeliteTodo, todoId, setTodoId };
};
