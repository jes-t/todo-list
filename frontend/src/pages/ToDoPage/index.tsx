import styled from 'styled-components';
import { AddTask } from './AddTask';
import { ToDoList } from './ToDoList';
import { useGate } from 'effector-react';
import { TasksGate } from './model/toDoPage/core';
export function ToDoPage() {
	useGate(TasksGate);

	return (
		<Root>
			<AddTask />
			<ToDoList />
		</Root>
	);
}

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 40px;
	overflow: hidden;
	gap: 40px;
`;
