import styles from './TodoNotFound.module.css';
import { Link } from 'react-router-dom';

export const TodoNotFound = ({ title }) => {
	return (
		<>
			<div className={styles.title}>{title}!</div>
			<Link className={styles.link} to={'/'}>
				<button>Go back to the main page</button>
			</Link>
		</>
	);
};
