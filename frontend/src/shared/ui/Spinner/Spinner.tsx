import styled from 'styled-components';

export const Spinner = styled.div<{ size?: string }>`
	display: inline-block;
	width: ${({ size }) => size || '30px'};
	height: ${({ size }) => size || '30px'};
	border: 3px solid rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	border-top: 3px solid #3498db;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
