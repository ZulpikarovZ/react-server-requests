import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTodo = () => {
	const [isShowModal, setIsShowModal] = useState(false);

	const requestUpdateTodo = (todoId, todoTitle) => {
		setIsShowModal(false);

		const todoItemDbRef = ref(db, `todos/${todoId}`);

		set(todoItemDbRef, {
			title: todoTitle.trim(),
			id: todoId,
		}).then((response) =>
			console.log('TODO is updated! Server response: ', response),
		);
	};

	return { requestUpdateTodo, isShowModal, setIsShowModal };
};
