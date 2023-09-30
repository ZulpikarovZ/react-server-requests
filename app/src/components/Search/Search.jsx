import styles from './Search.module.css';

export const Search = ({ setSearchValue, searchValue }) => {
	return (
		<input
			className={styles.input}
			placeholder="search..."
			value={searchValue}
			onChange={(e) => setSearchValue(e.target.value)}
		/>
	);
};
