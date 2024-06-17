import axios from 'axios';
import { createEffect } from 'effector';
import { Task } from 'src/shared/types';

interface newTask {
	text: string;
	is_checked: boolean;
}

export const addTaskFx = createEffect<newTask, Task>(async (task) => {
	try {
		const response = await axios.post('http://localhost:5000/todo', task);
		return response.data;
	} catch (error) {
		throw new Error(String(error));
	}
});
