import { useNavigate } from 'react-router-dom';
import { Button } from 'src/shared/ui/Button/Button';
import styled from 'styled-components';

export function NoMatch() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<Root>
			<h1>404 Not Found</h1>
			<Button onClick={handleClick}>{'Go to the TODO'}</Button>
		</Root>
	);
}

const Root = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 15px;
`;
