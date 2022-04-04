import React from 'react';
import ReactDOM from 'react-dom';
import CountriesProvider from './context/countriesContext/countriesContext';
import ThemeProvider from './context/themeContext/themeContext';
import Router from './router/router';
import './styles/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<CountriesProvider>
				<Router />
			</CountriesProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
