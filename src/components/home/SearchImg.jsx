import { useContext } from 'react';
import { theme } from '../../context/themeContext/themeContext';

const SearchImg = () => {
	const [state] = useContext(theme);

	return state === 'light-mode' ? <img className="main__input-search__logo-search" src="/assets/search.svg" alt="glass-icon" /> : <img className="main__input-search__logo-search" src="/assets/search-dark.svg" alt="glass-icon" />;
};

export default SearchImg;
