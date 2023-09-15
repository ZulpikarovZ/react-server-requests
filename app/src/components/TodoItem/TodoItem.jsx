import styles from './TodoItem.module.css';

export const TodoItem = ({ todo }) => {
	return <li className={styles.item}>{todo.title}</li>;
};
