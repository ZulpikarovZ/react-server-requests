import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const Debounce = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(Debounce);
	}, [value]);

	return debouncedValue;
};
