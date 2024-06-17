import { useState } from 'react';
import { Task } from 'src/shared/types';
import { AsyncButton } from 'src/shared/ui/Button/AsyncButton';
import { Button } from 'src/shared/ui/Button/Button';
import styled from 'styled-components';

interface TaskProps {
	task: Task;
}

export function TaskComponent({ task }: TaskProps) {
	const [isChecked, setIsChecked] = useState(task.is_checked);

	const onCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleEdit = () => {
		console.log('Edit', task);
	};

	const handleDelete = () => {
		console.log('Delete task:', task);
	};

	return (
		<Root>
			<Checkbox checked={task.is_checked} onChange={onCheckboxChange} />
			<TaskText>{task.text}</TaskText>
			<Button onClick={handleEdit}>Edit</Button>
			<AsyncButton title="Trash" onClick={handleDelete} isLoading={false} />
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

const TaskText = styled.span`
	flex: 1;
	margin-left: 10px;
`;
