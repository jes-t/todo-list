import { Task } from 'src/shared/types';
import styled from 'styled-components';
import { TaskComponent } from './ui/Task';
import { $tasks } from '../model/core';
import { Spinner } from 'src/shared/ui/Spinner/Spinner';
import { reflect, variant } from '@effector/reflect';
import { getTasksFx } from '../model/effects';

interface ToDoListViewProps {
	tasks: Task[];
}

function ToDoListView({ tasks }: ToDoListViewProps) {
	return (
		<Root>
			{tasks
				.slice()
				.reverse()
				.map((task) => (
					<TaskComponent key={task._id} task={task} />
				))}
		</Root>
	);
}

const Root = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex: 1;
	width: 100%;
	height: 100%;
	gap: 10px;
	overflow-y: auto;
`;

export const ToDoList = variant({
	if: getTasksFx.pending,
	then: Spinner,
	// @ts-expect-error: effector type issue
	else: reflect({
		view: ToDoListView,
		bind: { tasks: $tasks },
	}),
});
