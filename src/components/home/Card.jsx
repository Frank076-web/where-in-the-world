import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { theme } from '../../context/themeContext/themeContext';

const CustomCard = ({ country }) => {
	const { name, population, region, capital, flags, cca2 } = country;
	const [state] = useContext(theme);
	const navigate = useNavigate();

	const showMore = e => {
		navigate(`/${cca2}`);
	};

	let themeCard = state;

	if (themeCard === 'light-mode') themeCard = 'light-mode-card';
	else themeCard = 'dark-mode-card';

	return (
		<div className={`main__cards__card ${themeCard}`} onClick={showMore}>
			<img className="main__cards__card__image" src={flags.png} alt={name.common + ' flag'} />
			<h5 className="main__cards__card__title">{name.common}</h5>
			<p className="main__cards__card__description">
				<span className="main__cards__card__description--title">Population: </span>
				{population}
			</p>
			<p className="main__cards__card__description">
				<span className="main__cards__card__description--title">Region: </span>
				{region}
			</p>
			<p className="main__cards__card__description">
				<span className="main__cards__card__description--title">Capital: </span>
				{capital}
			</p>
		</div>
	);
};

export default CustomCard;
