import styled from 'styled-components';

export function ToDoPage() {
	return (
		<Root>
			<Title>{'TODO'}</Title>
		</Root>
	);
}

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Title = styled.span``;
