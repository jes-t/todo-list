import { useState } from 'react';
import styled from 'styled-components';
import { reflect } from '@effector/reflect';
import {
	$editingTaskId,
	checkboxToggled,
} from 'src/pages/ToDoPage/model/toDoList/core';
import { Task } from 'src/pages/ToDoPage/model/toDoPage/types';
import { TaskControls } from './TaskControls';
import { ManagedTextInput } from './ManageTextInput';

interface TaskProps {
	task: Task;
	checkTask: (task: Task) => void;
	editingTask: string | null;
}

function TaskView({ task, checkTask, editingTask }: TaskProps) {
	const [isChecked, setIsChecked] = useState(task.is_checked);

	const onCheckboxChange = () => {
		checkTask({ ...task, is_checked: !isChecked });
		setIsChecked(!isChecked);
	};

	const isEditingMode = editingTask === task.id;

	return (
		<Root>
			<Checkbox checked={isChecked} onChange={onCheckboxChange} />

			{isEditingMode ? (
				<ManagedTextInput task={task} />
			) : (
				<TaskControls task={task} />
			)}
		</Root>
	);
}

const Root = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 10px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	width: 20px;
	height: 20px;
`;

export const TaskComponent = reflect({
	view: TaskView,
	bind: {
		checkTask: checkboxToggled,
		editingTask: $editingTaskId,
	},
});
