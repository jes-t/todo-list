import { useState } from 'react';
import styled from 'styled-components';
import { $editingMode, checkboxToggled } from '../../model/toDoList/core';
import { Task } from '../../model/toDoPage/types';
import { reflect } from '@effector/reflect';
import { TaskControls } from './Task/TaskControls';
import { ManagedTextInput } from './Task/ManageTextInput';

interface TaskProps {
	task: Task;
	checkTask: (task: Task) => void;
	isEditingMode: boolean;
}

function TaskView({ task, checkTask, isEditingMode }: TaskProps) {
	const [isChecked, setIsChecked] = useState(task.is_checked);

	const onCheckboxChange = () => {
		checkTask({ ...task, is_checked: !isChecked });
		setIsChecked(!isChecked);
	};

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
		isEditingMode: $editingMode,
	},
});
