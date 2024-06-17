import axios from 'axios';
import { createEffect } from 'effector';
import { Task } from 'src/shared/types';

export const getTasksFx = createEffect<void, Task[]>(async () => {
	try {
		const response = await axios.get('http://localhost:5000/todo');
		return response.data;
	} catch (error) {
		throw new Error(error as string);
	}
});
