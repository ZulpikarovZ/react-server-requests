import styles from './App.module.css';
import { TodoList } from './components/TodoList/TodoList';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TodoView } from './components/TodoView/TodoView';
import { NotFound } from './components/NotFound/NotFound';
import { TodoNotFound } from './components/TodoNotFound/TodoNotFound';

export const App = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<TodoList />} />
				<Route path="/task/:id" element={<TodoView />} />
				<Route path="/todo-not-exist" element={<TodoNotFound title={'Todo Not Exist'} />} />
				<Route path="/todo-load-error" element={<TodoNotFound title={'Todo Load Error'} />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};
