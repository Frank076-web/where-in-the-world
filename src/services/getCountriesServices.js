import { getApiBase } from './serviceApiBase';

const urlGetAll = process.env.REACT_APP_GET_ALL;
const urlGetByName = process.env.REACT_APP_GET_BY_NAME;
const urlGetByContinent = process.env.REACT_APP_GET_BY_CONTINENT;

export const getAllCountries = params => {
	return getApiBase(urlGetAll, params);
};

export const getCountrieByName = (name, params) => {
	return getApiBase(`${urlGetByName}/${name}`, params);
};

export const getCountriesByContinent = (continent, params) => {
	return getApiBase(`${urlGetByContinent}/${continent}`, params);
};
