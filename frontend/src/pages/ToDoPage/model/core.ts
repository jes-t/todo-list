import { createStore, sample } from 'effector';
import { Task } from 'src/shared/types';
import { createGate } from 'effector-react';
import { getTasksFx } from './effects';

export const TasksGate = createGate<void>('TasksGate');

export const $tasks = createStore<Task[]>([]);

sample({
	source: getTasksFx.doneData,
	fn: (tasks) => tasks,
	target: $tasks,
});

sample({
	source: TasksGate.open,
	target: getTasksFx,
});
