import { createEvent, createStore, sample } from 'effector';
import { addTaskFx } from './effects';
import { $tasks } from '../toDoPage/core';

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
	fn: (tasks, newTask) => [newTask, ...tasks],
	target: $tasks,
});

sample({
	clock: addTaskFx.doneData,
	fn: () => '',
	target: $taskText,
});

sample({
	clock: addedTask,
	source: $taskText,
	fn: (taskText) => ({
		text: taskText,
		is_checked: false,
	}),
	target: addTaskFx,
});
