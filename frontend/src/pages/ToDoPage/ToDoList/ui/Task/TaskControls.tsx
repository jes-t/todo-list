import { reflect } from '@effector/reflect';
import {
	editingModeStarted,
	taskDeleted,
} from 'src/pages/ToDoPage/model/toDoList/core';
import { deleteTaskFx } from 'src/pages/ToDoPage/model/toDoList/effects';
import { Task } from 'src/pages/ToDoPage/model/toDoPage/types';
import { AsyncButton } from 'src/shared/ui/Button/AsyncButton';
import { Button } from 'src/shared/ui/Button/Button';
import styled from 'styled-components';

interface TaskControlsViewProps {
	task: Task;
	startEditing: (id: string) => void;
	deleteTask: (id: string) => void;
	isLoading: boolean;
}

function TaskControlsView({
	task,
	startEditing,
	deleteTask,
	isLoading,
}: TaskControlsViewProps) {
	const onEdit = () => {
		startEditing(task.id);
	};

	const onDelete = () => {
		deleteTask(task.id);
	};

	return (
		<Root>
			<TaskText>{task.text}</TaskText>
			<ButtonsWrapper>
				<Button onClick={onEdit} width="50px">
					Edit
				</Button>
				<AsyncButton
					title="Trash"
					onClick={onDelete}
					isLoading={isLoading}
					width="50px"
				/>
			</ButtonsWrapper>
		</Root>
	);
}

const Root = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 10px;
`;

const TaskText = styled.span`
	flex: 1;
	word-break: break-word;
	white-space: pre-wrap;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 15px;
`;

export const TaskControls = reflect({
	view: TaskControlsView,
	bind: {
		startEditing: editingModeStarted,
		deleteTask: taskDeleted,
		isLoading: deleteTaskFx.pending,
	},
});
