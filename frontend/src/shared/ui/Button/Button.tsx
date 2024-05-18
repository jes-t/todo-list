import styled from 'styled-components';

export const Button = styled.button`
	width: 120px;
	height: 30px;
	border-radius: 5px;
	border: 1px solid gray;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: white;
		cursor: pointer;
	}
`;
