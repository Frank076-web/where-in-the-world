import { createContext, useState } from 'react';

export const theme = createContext();

const ThemeProvider = ({ children }) => {
	const [state, setState] = useState(localStorage.getItem('theme') || 'light-mode');

	if (localStorage.getItem('theme')) {
		document.body.classList.add(state);
	} else {
		localStorage.setItem('theme', state);
	}

	const themeHandler = () => {
		if (state === 'light-mode') {
			setState('dark-mode');
			localStorage.setItem('theme', 'dark-mode');
			document.body.classList.add(state);
			document.body.classList.remove('light-mode');
		} else {
			setState('light-mode');
			localStorage.setItem('theme', 'light-mode');
			document.body.classList.add(state);
			document.body.classList.remove('dark-mode');
		}
	};

	return <theme.Provider value={[state, themeHandler]}>{children}</theme.Provider>;
};

export default ThemeProvider;
