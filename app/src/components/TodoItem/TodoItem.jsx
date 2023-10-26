import styles from './TodoItem.module.css';
import { Link } from 'react-router-dom';

export const TodoItem = ({ todo }) => {
	return (
		<>
			<li className={styles.item}>
				<div>{todo.id}</div>
				<div>
					<Link to={`/task/${todo.id}`}>{todo.title}</Link>
				</div>
			</li>
		</>
	);
};
