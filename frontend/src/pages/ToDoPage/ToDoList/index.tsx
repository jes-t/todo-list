import styled from 'styled-components';
import { list, variant } from '@effector/reflect';
import { Spinner } from 'src/shared/ui/Spinner/Spinner';
import { getTasksFx } from '../model/toDoPage/effects';
import { $tasks } from '../model/toDoPage/core';
import { TaskComponent } from './ui/Task';

export function ToDoList() {
	return (
		<Root>
			<TasksList />
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

const TasksList = variant({
	if: getTasksFx.pending,
	then: Spinner,
	else: list({
		view: TaskComponent,
		source: $tasks,
		mapItem: {
			task: (task) => task,
		},
		getKey: (task) => task.id,
	}),
});
