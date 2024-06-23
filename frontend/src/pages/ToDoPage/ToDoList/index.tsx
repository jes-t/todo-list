import styled from 'styled-components';
import { TaskComponent } from './ui/Task';
import { reflect } from '@effector/reflect';
import { Spinner } from 'src/shared/ui/Spinner/Spinner';
import { getTasksFx } from '../model/toDoPage/effects';
import { $tasks } from '../model/toDoPage/core';
import { Task } from '../model/toDoPage/types';

interface ToDoListViewProps {
	tasks: Task[];
	isLoading: boolean;
}

function ToDoListView({ tasks, isLoading }: ToDoListViewProps) {
	return (
		<Root>
			{isLoading ? (
				<Spinner />
			) : (
				tasks.map((task) => <TaskComponent key={task.id} task={task} />)
			)}
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

export const ToDoList = reflect({
	view: ToDoListView,
	bind: { tasks: $tasks, isLoading: getTasksFx.pending },
});
