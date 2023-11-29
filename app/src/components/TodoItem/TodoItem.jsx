import styles from './TodoItem.module.css';
import editIco from '../../assets/edit.png';
import delIco from '../../assets/del.png';
import { useDispatch } from 'react-redux';
import {
	chosenTodoIdAction,
	chosenTodoTitleAction,
	toggleModalAction,
} from '../../redux/actions/settingsActions';

export const TodoItem = ({ todo, requestDeliteTodo }) => {
	const dispatch = useDispatch();

	const editTodo = () => {
		dispatch(toggleModalAction(true));
		dispatch(chosenTodoIdAction(todo.id));
		dispatch(chosenTodoTitleAction(todo.title));
	};

	return (
		<>
			<li className={styles.item}>
				<div>{todo.id}</div>
				<div>{todo.title}</div>
				<div onClick={editTodo}>
					<img src={editIco} alt="" />
				</div>
				<div onClick={() => requestDeliteTodo(todo.id)}>
					<img src={delIco} alt="" />
				</div>
			</li>
		</>
	);
};
