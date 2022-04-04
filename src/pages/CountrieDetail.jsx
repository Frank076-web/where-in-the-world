import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { dataCountries } from '../context/countriesContext/countriesContext';

const CountrieDetail = () => {
	const [countries] = useContext(dataCountries);
	const { identifier } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (countries.data.length === 0) {
			navigate('/');
		}
		window.scrollTo(0, 0);
	});

	if (countries.data.length === 0) {
		return null;
	}

	const country = countries.data.find(value => value.cca2 === identifier);
	const { population, region, subregion, tld, languages } = country;
	const flag = country.flags.svg;
	const name = country.name.common;
	const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].official;
	const capital = country.capital[0];
	const topLevelDomain = tld[0];
	const currencies = country.currencies[Object.keys(country.currencies)[0]].name;
	const languagesKeys = Object.keys(languages);
	const borders = country.borders;

	return (
		<main className="main-countriedetail">
			<button className="main-countriedetail__button" onClick={() => navigate(-1)}>
				<img src="/assets/arrow.svg" alt="arrow icon" />
				Back
			</button>
			<div className="main-countriedetail__details">
				<img className="main-countriedetail__details__img" src={flag} alt={nativeName}></img>
				<div className="main-countriedetail__details__detail">
					<h4 className="main-countriedetail__details__detail__title">{name}</h4>
					{/********************************SECTION**************************************/}
					<div className="main-countriedetail__details__detail__section">
						{/********************************SECTION1**************************************/}
						<div className="main-countriedetail__details__detail__section1">
							<div className="main-countriedetail__details__detail__description">
								<p>Native Name: </p>
								<span>{nativeName}</span>
							</div>
							<div className="main-countriedetail__details__detail__description">
								<p>Population: </p>
								<span>{population}</span>
							</div>
							<div className="main-countriedetail__details__detail__description">
								<p>Region: </p>
								<span>{region}</span>
							</div>
							<div className="main-countriedetail__details__detail__description">
								<p>Sub Region: </p>
								<span>{subregion}</span>
							</div>
							<div className="main-countriedetail__details__detail__description">
								<p>Capital: </p>
								<span>{capital}</span>
							</div>
						</div>
						{/********************************END SECTION1**************************************/}

						{/********************************SECTION2**************************************/}
						<div className="main-countriedetail__details__detail__section2">
							<div className="main-countriedetail__details__detail__description">
								<p>Top Level Domain: </p>
								<span>{topLevelDomain}</span>
							</div>
							<div className="main-countriedetail__details__detail__description">
								<p>Currencies: </p>
								<span>{currencies}</span>
							</div>
							<div className="main-countriedetail__details__detail__description">
								<p>Lenguages: </p>
								{languagesKeys.map(key => (languagesKeys.indexOf(key) !== languagesKeys.length - 1 ? <span key={key}>{languages[key]},</span> : <span key={key}>{languages[key]}</span>))}
							</div>
						</div>
						{/********************************END SECTION2**************************************/}

						{/********************************SECTION3**************************************/}
						<div className="main-countriedetail__details__detail__section3">
							<div className="main-countriedetail__details__detail__description">
								<p>Border: </p>
								<div>{borders && borders.map(value => <button key={value}>{value}</button>)}</div>
							</div>
						</div>
						{/********************************END SECTION3*********************************/}
					</div>
					{/********************************END SECTION**************************************/}
				</div>
			</div>
		</main>
	);
};

export default CountrieDetail;
