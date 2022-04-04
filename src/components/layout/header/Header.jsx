import MoonIcon from './MoonIcon';
import { useContext } from 'react';
import { theme } from '../../../context/themeContext/themeContext';

const Header = () => {
	const [state, themeHandler] = useContext(theme);
	let themeHeader = state;

	if (themeHeader === 'light-mode') themeHeader = 'light-mode-header';
	else themeHeader = 'dark-mode-header';

	return (
		<header className={`header ${themeHeader}`}>
			<p className="header__title">Where in the world?</p>
			<div className="header__darkmode" onClick={themeHandler}>
				<MoonIcon state={state} />
				<p className="header__darkmode__text">Dark Mode</p>
			</div>
		</header>
	);
};

export default Header;
