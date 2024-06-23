import { ChangeEvent } from 'react';
import { AsyncButton } from 'src/shared/ui/Button/AsyncButton';
import { TextInput } from 'src/shared/ui/TextInput/TextInput';
import styled from 'styled-components';
import { $taskText, addedTask, taskTextChanged } from '../model/addTask/core';
import { reflect } from '@effector/reflect';
import { addTaskFx } from '../model/addTask/effects';

interface AddTaskViewProps {
	text: string;
	changeText: (value: string) => void;
	isLoading: boolean;
}

function AddTaskView({ text, changeText, isLoading }: AddTaskViewProps) {
	const onTaskTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		changeText(e.target.value);
	};

	const addNewTask = () => {
		if (text.trim() === '') return;

		addedTask();
	};

	return (
		<Root>
			<TextInput value={text} onChange={onTaskTextChange} />
			<ButtonWrapper>
				<AsyncButton
					onClick={addNewTask}
					title="Add a task"
					isLoading={isLoading}
					spinnerSize="25px"
				/>
			</ButtonWrapper>
		</Root>
	);
}

const Root = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 10px;
`;

const ButtonWrapper = styled.div`
	padding-right: 10px;
`;

export const AddTask = reflect({
	view: AddTaskView,
	bind: {
		text: $taskText,
		changeText: taskTextChanged,
		isLoading: addTaskFx.pending,
	},
});
