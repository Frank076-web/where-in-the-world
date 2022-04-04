import { createContext, useReducer } from 'react';
import { countriesReducer } from './countriesReducer';
import { getCountrieByName, getCountriesByContinent } from '../../services/getCountriesServices';
import debounce from 'lodash/debounce';

const initialState = {
	data: [],
	loading: false,
	error: null
};

export const dataCountries = createContext();

export default function CountriesProvider({ children }) {
	const [state, dispatch] = useReducer(countriesReducer, initialState);

	const debouncedGetValueFromSearch = debounce(value => {
		if (!value) return;
		dispatch({ type: 'FETCH_COUNTRIES_START' });
		getCountrieByName(value)
			.then(res => res.json())
			.then(data => {
				Array.isArray(data) ? dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: data }) : dispatch({ type: 'FETCH_COUNTRIES_FAILURE', payload: data });
			})
			.catch(error => dispatch({ type: 'FETCH_COUNTRIES_FAILURE', payload: error }));
	}, 1000);

	const getSelectValue = continent => {
		if (!continent) return;
		dispatch({ type: 'FETCH_COUNTRIES_START' });
		getCountriesByContinent(continent)
			.then(res => res.json())
			.then(data => {
				Array.isArray(data) ? dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: data }) : dispatch({ type: 'FETCH_COUNTRIES_FAILURE', payload: data });
			})
			.catch(error => dispatch({ type: 'FETCH_COUNTRIES_FAILURE', payload: error }));
	};

	return <dataCountries.Provider value={[state, debouncedGetValueFromSearch, getSelectValue]}>{children}</dataCountries.Provider>;
}
