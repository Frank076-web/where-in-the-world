import { useContext } from 'react';
import { theme } from '../../../context/themeContext/themeContext';

const Footer = () => {
	const [state] = useContext(theme);
	let themeFooter = state;

	if (themeFooter === 'light-mode') themeFooter = 'light-mode-footer';
	else themeFooter = 'dark-mode-footer';

	return (
		<footer className={`footer ${themeFooter}`}>
			<small>&copy; Copyright 2022, Franco Inzerillo</small>
		</footer>
	);
};

export default Footer;
