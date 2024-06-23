import { createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { getTasksFx } from './effects';
import { Task } from './types';

export const TasksGate = createGate<void>('TasksGate');

export const $tasks = createStore<Task[]>([]);

sample({
	source: TasksGate.open,
	target: getTasksFx,
});

sample({
	source: getTasksFx.doneData,
	fn: (tasks) => {
		return [...tasks].sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	},
	target: $tasks,
});
