import { createEvent, createStore, sample } from 'effector';
import { addTaskFx } from './effects';
import { $tasks } from '../../model/core';

export const $taskText = createStore<string>('');

export const taskTextChanged = createEvent<string>();
export const addedTask = createEvent();

sample({
	source: taskTextChanged,
	fn: (newText) => newText,
	target: $taskText,
});

sample({
	clock: addTaskFx.doneData,
	source: $tasks,
	fn: (tasks, newTask) => [...tasks, newTask],
	target: $tasks,
});

sample({
	clock: addTaskFx.done,
	fn: () => '',
	target: $taskText,
});

sample({
	source: $taskText,
	clock: addedTask,
	fn: (taskText) => ({
		text: taskText,
		is_checked: false,
	}),
	target: addTaskFx,
});
