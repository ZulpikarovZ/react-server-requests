import styles from './TodoList.module.css';
import { useEffect, useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);
	console.log('todos ', todos);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
			.then((resp) => resp.json())
			.then((todos) => setTodos(todos));
	}, []);

	return (
		<main className={styles.wrap}>
			<h1 className={styles.title}>My Todos</h1>
			<ul className={styles.list}>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</main>
	);
};
