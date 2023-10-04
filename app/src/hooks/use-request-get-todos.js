import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState({});
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodosList = () => setRefreshTodosFlag(!refreshTodosFlag);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val() || {};
			setTodos(loadedTodos);
		});
	}, [refreshTodosFlag]);

	return { todos, setTodos, refreshTodosList };
};
