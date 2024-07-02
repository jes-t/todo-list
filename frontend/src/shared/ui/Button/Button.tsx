import styled from 'styled-components';

export const Button = styled.button<{ width?: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || '120px'};
	height: 30px;
	border-radius: 5px;
	border: 1px solid gray;

	&:hover {
		background-color: white;
		cursor: pointer;
	}
`;
