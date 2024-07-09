import { createEffect } from 'effector';
import { Task } from '../toDoPage/types';
import { axiosInstance } from 'src/shared/api/createInstance';

interface newTask {
	text: string;
	is_checked: boolean;
}

export const addTaskFx = createEffect<newTask, Task>(async (task) => {
	try {
		const response = await axiosInstance.post('/todo', task);
		return response.data;
	} catch (error) {
		throw new Error(error as string);
	}
});
