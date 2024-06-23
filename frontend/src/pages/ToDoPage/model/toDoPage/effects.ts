import { createEffect } from 'effector';
import { Task } from './types';
import { axiosInstance } from 'src/shared/api/createInstance';

export const getTasksFx = createEffect<void, Task[]>(async () => {
	try {
		const response = await axiosInstance.get('/todo');
		return response.data;
	} catch (error) {
		throw new Error(error as string);
	}
});
