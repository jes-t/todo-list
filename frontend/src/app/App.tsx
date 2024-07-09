import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from 'src/widgets/NavBar';
import { NoMatch } from 'src/pages/NoMatchPage';
import { Profile } from 'src/pages/ProfilePage';
import { ToDoPage } from 'src/pages/ToDoPage';

export function App() {
	return (
		<Root>
			<NavBar />
			<Routes>
				<Route index element={<ToDoPage />} />
				<Route path="profile" element={<Profile />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Root>
	);
}

const Root = styled.div`
	display: flex;
	height: 100%;
`;
