import styles from './Search.module.css';
import { searchInputValueAction } from '../../redux/actions/settingsActions';
import { useDispatch, useSelector } from 'react-redux';
import { searchInputValueSelector } from '../../redux/selectors/settingsSelectors';

export const Search = () => {
	const dispatch = useDispatch();
	const searchInputValue = useSelector(searchInputValueSelector);

	return (
		<input
			className={styles.input}
			placeholder="search..."
			value={searchInputValue}
			onChange={(e) => dispatch(searchInputValueAction(e.target.value))}
		/>
	);
};
