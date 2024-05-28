import styled from 'styled-components';

export function Profile() {
	return (
		<Root>
			<Name>It's me</Name>
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

const Name = styled.span``;
