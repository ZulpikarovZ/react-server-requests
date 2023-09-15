import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList';

export const App = () => {
	return (
		<div className={styles.app}>
			<TodoList />
		</div>
	);
};
