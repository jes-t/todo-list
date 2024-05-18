import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import { App } from './app/App';

const rootElement = document.getElementById('root');
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
} else {
	console.error('Root element not found.');
}
