import styled from 'styled-components';
import { NavLink } from './ui/NavLink';

export function NavBar() {
	return (
		<Root>
			<Brand>RightPlan</Brand>
			<ManageLinks>
				<NavLink to="/" title="To-do" />
				<NavLink to="/profile" title="Profile" />
			</ManageLinks>
		</Root>
	);
}

const Brand = styled.span`
	font-weight: bold;
	margin-bottom: 30px;
`;
const Root = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 200px;
	min-width: 200px;
	border-right: 1px solid black;
	padding: 20px;
`;
const ManageLinks = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	list-style-type: none;
`;
