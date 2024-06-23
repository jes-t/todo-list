import axios from 'axios';
import { createEffect } from 'effector';
import { Task } from './types';

export const getTasksFx = createEffect<void, Task[]>(async () => {
	try {
		const response = await axios.get('http://localhost:5000/todo');
		console.log('🚀 ~ getTasksFx ~ response.data:', response.data);

		return response.data;
	} catch (error) {
		throw new Error(error as string);
	}
});
