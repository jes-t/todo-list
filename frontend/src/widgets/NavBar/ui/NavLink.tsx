import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import styled from 'styled-components';

interface NavLinkProps {
	to: string;
	title: string;
}

export function NavLink({ to, title }: NavLinkProps) {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });

	return (
		<Root $isActive={Boolean(match)}>
			<StyledLink to={to}>{title}</StyledLink>
		</Root>
	);
}

const Root = styled.li<{ $isActive: boolean }>`
	width: 100%;
	transition: all 0.3s;
	border: 1px solid ${({ $isActive }) => ($isActive ? 'gray' : 'black')};
	background-color: ${({ $isActive }) => ($isActive ? '#e7e2e2' : 'white')};
	border-radius: 6px;
	&:hover {
		background-color: #e7e2e2;
		border-color: gray;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 10px;
	text-decoration: none;
	color: black;
`;
