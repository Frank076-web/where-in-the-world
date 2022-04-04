import CustomCard from '../components/home/Card';
import { useContext } from 'react';
import { dataCountries } from '../context/countriesContext/countriesContext';
import Spinner from '../components/spinner/Spinner';
import { theme } from '../context/themeContext/themeContext';
import SearchImg from '../components/home/SearchImg';

const Home = () => {
	const [countries, debouncedGetValueFromSearch, getSelectValue] = useContext(dataCountries);
	const [state] = useContext(theme);

	let themeForm = state;

	if (themeForm === 'light-mode') themeForm = 'light-mode-form';
	else themeForm = 'dark-mode-form';

	return (
		<main className="main">
			<div className="main__filters">
				<div className="main__input-search">
					<input className={`main__input-search__input-country ${themeForm}`} light-mode-form type="search" placeholder="Search for a country..." onChange={e => debouncedGetValueFromSearch(e.target.value)} />
					<SearchImg />
				</div>
				<select className={`main__select ${themeForm}`} onChange={e => getSelectValue(e.target.value)}>
					<option value={''}>Filter by Region</option>
					<option value={'africa'}>Africa</option>
					<option value={'america'}>America</option>
					<option value={'asia'}>Asia</option>
					<option value={'europe'}>Europe</option>
					<option value={'oceania'}>Oceania</option>
				</select>
			</div>
			<div className="main__cards">
				{countries.loading && <Spinner />}
				{countries.error && <h2>Countrie {countries.error.message}</h2>}
				{countries.data.length > 0 && countries.data.map(country => <CustomCard key={country.name.common} country={country} />)}
			</div>
		</main>
	);
};

export default Home;
