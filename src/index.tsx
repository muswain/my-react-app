import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import theme from './theme';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<App />,
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root')
);
