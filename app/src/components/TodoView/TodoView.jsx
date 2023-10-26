import styles from './TodoView.module.css';
import editIco from '../../assets/edit.png';
import delIco from '../../assets/del.png';
import arrowLeft from '../../assets/ar2.png';
import {
	useRequestDeleteTodo,
	useRequestGetTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
} from '../../hooks';
import { Modal } from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

export const TodoView = () => {
	const { setTodos } = useRequestGetTodos();
	const { todo, isTodoLoading } = useRequestGetTodo();
	const { requestDeliteTodo } = useRequestDeleteTodo(setTodos);
	const { isShowModal, setIsShowModal, requestUpdateTodo } =
		useRequestUpdateTodo(setTodos);

	const navigate = useNavigate();

	return (
		<div className={styles.card}>
			{isTodoLoading ? (
				<div>Loading...</div>
			) : isShowModal ? (
				<Modal requestUpdateTodo={requestUpdateTodo} todoId={todo.id} />
			) : (
				<>
					<h1 className={styles.header}>Task № {todo.id}</h1>
					<div className={styles.wrap}>
						<div className={styles.text}>{todo.title}</div>
						<div className={styles.back} onClick={() => navigate(-1)}>
							<img src={arrowLeft} alt="" />
						</div>
					</div>
					<div className={styles.buttons}>
						<div onClick={() => setIsShowModal(true)}>
							<img src={editIco} alt="" />
						</div>
						<div onClick={() => requestDeliteTodo(todo.id)}>
							<img src={delIco} alt="" />
						</div>
					</div>
				</>
			)}
		</div>
	);
};
