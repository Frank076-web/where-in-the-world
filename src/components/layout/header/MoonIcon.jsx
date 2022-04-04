const MoonIcon = ({ state }) => {
	const moonLight = {
		image: '/assets/moon-o.svg',
		alt: 'moon icon'
	};
	const moonDark = {
		image: '/assets/moon-dark.svg',
		title: 'sun icon'
	};

	return state === 'light-mode' ? <img className="header__darkmode__logo" src={moonLight.image} alt={moonLight.title} /> : <img className="header__darkmode__logo" src={moonDark.image} alt={moonDark.title} />;
};

export default MoonIcon;
