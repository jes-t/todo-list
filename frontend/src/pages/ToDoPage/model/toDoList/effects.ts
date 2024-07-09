import { createEffect } from 'effector';
import { UdatedTask } from './type';
import { Task } from '../toDoPage/types';
import { axiosInstance } from 'src/shared/api/createInstance';

export const editTaskFx = createEffect<UdatedTask, Task>(
	async (updatedTask) => {
		try {
			const response = await axiosInstance.patch(`/todo/${updatedTask.id}`, {
				text: updatedTask.text,
				is_checked: updatedTask.is_checked,
			});
			return response.data;
		} catch (error) {
			throw new Error(error as string);
		}
	}
);

export const deleteTaskFx = createEffect<string, string>(async (taskId) => {
	try {
		await axiosInstance.delete(`/todo/${taskId}`);
		return taskId;
	} catch (error) {
		throw new Error(error as string);
	}
});
