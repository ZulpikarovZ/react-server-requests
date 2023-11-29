import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isSortedTodosAction } from '../redux/actions/settingsActions';
import { todosSelector } from '../redux/selectors/todosSelectors';
import { getTodosAction, sortingTodosAction } from '../redux/actions/todosActions';
import { isSortedTodosSelector } from '../redux/selectors/settingsSelectors';

export const useSortList = () => {
	const [copyTodos, setCopyTodos] = useState([]);
	const dispatch = useDispatch();
	const todos = useSelector(todosSelector);
	const isSortedTodos = useSelector(isSortedTodosSelector);

	const sortHandler = () => {
		if (!isSortedTodos) {
			setCopyTodos([...todos]);

			dispatch(sortingTodosAction());
			dispatch(isSortedTodosAction(true));
		} else {
			dispatch(getTodosAction([...copyTodos]));
			dispatch(isSortedTodosAction(false));
		}
	};

	return { sortHandler };
};
