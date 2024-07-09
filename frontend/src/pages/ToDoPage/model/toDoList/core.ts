import { createEvent, createStore, sample } from 'effector';
import { deleteTaskFx, editTaskFx } from './effects';
import { UdatedTask } from './type';
import { $tasks } from '../toDoPage/core';

export const $editingTaskId = createStore<string>('');

export const checkboxToggled = createEvent<UdatedTask>();

export const taskDeleted = createEvent<string>();

export const taskTextEdited = createEvent<UdatedTask>();

export const editingModeStarted = createEvent<string>();
export const editingModeStoped = createEvent<string>();

sample({
	source: checkboxToggled,
	target: editTaskFx,
});

sample({
	clock: editTaskFx.doneData,
	source: $tasks,
	fn: (tasks, updatedTask) =>
		tasks.map((task) =>
			task.id === updatedTask.id ? { ...task, ...updatedTask } : task
		),
	target: $tasks,
});

sample({
	source: taskDeleted,
	target: deleteTaskFx,
});

sample({
	clock: deleteTaskFx.doneData,
	source: $tasks,
	fn: (tasks, taskId) => {
		return tasks.filter((task) => task.id !== taskId);
	},
	target: $tasks,
});

sample({
	clock: editingModeStarted,
	fn: (id) => id,
	target: $editingTaskId,
});

sample({
	clock: editingModeStoped,
	fn: (id) => id,
	target: $editingTaskId,
});

sample({
	source: taskTextEdited,
	target: editTaskFx,
});
