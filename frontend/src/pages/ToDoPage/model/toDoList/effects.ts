import axios from 'axios';
import { createEffect } from 'effector';
import { UdatedTask } from './type';
import { Task } from '../toDoPage/types';

export const editTaskFx = createEffect<UdatedTask, Task>(
	async (updatedTask) => {
		try {
			const response = await axios.patch(
				`http://localhost:5000/todo/${updatedTask.id}`,
				{ text: updatedTask.text, is_checked: updatedTask.is_checked }
			);
			return response.data;
		} catch (error) {
			throw new Error(error as string);
		}
	}
);

export const deleteTaskFx = createEffect<string, string>(async (taskId) => {
	try {
		await axios.delete(`http://localhost:5000/todo/${taskId}`);
		return taskId;
	} catch (error) {
		throw new Error(error as string);
	}
});
