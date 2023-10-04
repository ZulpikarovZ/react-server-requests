import styles from './TodoItem.module.css';
import editIco from '../../assets/edit.png';
import delIco from '../../assets/del.png';

export const TodoItem = ({ todo, id,  requestDeliteTodo, setIsShowModal, setTodoId }) => {
	const editTodo = () => {
		setIsShowModal(true);
		setTodoId(id);
	};

	return (
		<>
			<li className={styles.item}>
				<div>{todo.id}</div>
				<div>{todo.title}</div>
				<div onClick={editTodo}>
					<img src={editIco} alt="" />
				</div>
				<div onClick={() => requestDeliteTodo(id)}>
					<img src={delIco} alt="" />
				</div>
			</li>
		</>
	);
};
