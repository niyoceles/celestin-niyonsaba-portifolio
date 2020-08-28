import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import objectTheme from './utils/theme';
import 'animate.css/animate.min.css';
import Content from './components/content';
import Footer from './components/footer';
import './App.css';
import Header from './components/header';

const App = () => {
	const theme = createMuiTheme(objectTheme);

	return (
		<MuiThemeProvider theme={theme}>
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		</MuiThemeProvider>
	);
};

export default App;
