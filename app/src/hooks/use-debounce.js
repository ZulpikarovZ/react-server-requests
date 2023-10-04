import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const Debounce = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => clearTimeout(Debounce);
	}, [value]);

	return debounceValue;
};
