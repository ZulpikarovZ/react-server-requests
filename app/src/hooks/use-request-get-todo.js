import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useRequestGetTodo = () => {
	const [isTodoLoading, setIsTodoLoading] = useState(true);
	const [error, setError] = useState('');
	const [todo, setTodo] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let isLoadingTimeout = false;
		let isProductLoaded = false;

		setIsTodoLoading(true);

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isProductLoaded) {
				navigate('/todo-load-error');
			}
		}, 5000);

		fetch(`http://localhost:3004/todos/${id}`)
			.then((resp) => resp.json())
			.then((todoFromServer) => {
				isProductLoaded = true;

				if (!isLoadingTimeout) {
					if (!todoFromServer.title) {
						navigate('/todo-not-exist');
						return;
					}

					setTodo(todoFromServer);
				}
			})
			.catch((err) => {
				setError(err);
				console.log('Error getting todo: ', error);
			})
			.finally(() => {
				setIsTodoLoading(false);
			});
	}, [error, id, navigate]);

	return { todo, setTodo, isTodoLoading };
};
