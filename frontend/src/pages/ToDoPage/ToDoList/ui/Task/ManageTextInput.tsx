import { reflect } from '@effector/reflect';
import { ChangeEvent, useState } from 'react';
import { taskTextChanged } from 'src/pages/ToDoPage/model/addTask/core';
import {
	editingModeStoped,
	taskTextEdited,
} from 'src/pages/ToDoPage/model/toDoList/core';
import { editTaskFx } from 'src/pages/ToDoPage/model/toDoList/effects';
import { Task } from 'src/pages/ToDoPage/model/toDoPage/types';
import { AsyncButton } from 'src/shared/ui/Button/AsyncButton';
import { Button } from 'src/shared/ui/Button/Button';
import { TextInput } from 'src/shared/ui/TextInput/TextInput';
import styled from 'styled-components';

interface ManagedTextInputProps {
	task: Task;
	stopEditing: (id: string) => void;
	editTask: (task: Task) => void;
	isLoading: boolean;
}

function ManagedTextInputView({
	task,
	stopEditing,
	editTask,
	isLoading,
}: ManagedTextInputProps) {
	const [editedText, setEditedText] = useState(task.text);

	const onTaskTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setEditedText(e.target.value);
	};

	const onCancel = () => {
		stopEditing('');
		setEditedText(task.text);
	};

	const onSave = () => {
		editTask({ ...task, text: editedText });
		if (!isLoading) {
			stopEditing('');
		}
	};

	return (
		<Root>
			<TextInput value={editedText} onChange={onTaskTextChange} />
			<ButtonsWrapper>
				<Button onClick={onCancel} width="50px">
					Cancel
				</Button>
				<AsyncButton
					title="Save"
					onClick={onSave}
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

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 15px;
`;

export const ManagedTextInput = reflect({
	view: ManagedTextInputView,
	bind: {
		changeText: taskTextChanged,
		stopEditing: editingModeStoped,
		editTask: taskTextEdited,
		isLoading: editTaskFx.pending,
	},
});
