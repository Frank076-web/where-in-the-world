import FetchingData from '../helpers/fetch';

export const fetchData = new FetchingData(process.env.REACT_APP_API_URL_BASE);

export const getApiBase = (path, params) => {
	return fetchData.get(path, params);
};
