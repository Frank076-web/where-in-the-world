export const countriesReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_COUNTRIES_START':
			return {
				data: [],
				loading: true,
				error: null
			};
		case 'FETCH_COUNTRIES_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload
			};
		case 'FETCH_COUNTRIES_FAILURE':
			return {
				data: [],
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};
