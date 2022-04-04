const getParams = function () {
	if (!(this instanceof FetchingData)) throw new Error('No tiene permisos para ejecutar esta función');
	return privateDataFetching.get(this);
};
const constructUrlParams = function (path = '', params) {
	if (!(this instanceof FetchingData)) throw new Error('No tiene permisos para ejecutar esta función');
	const url = getParams.call(this).url;
	const urlParams = new URL(url + path);
	Object.keys(params).forEach(e => url.searchParams.append(e, params[e]));
	return urlParams;
};
const constructQuery = function (path, config) {
	if (!(this instanceof FetchingData)) throw new Error('No tiene permisos para ejecutar esta función');
	if (!path) return new Error('Cannot fetch without path parameter');

	const url = getParams.call(this).url;
	if (!config.params) return fetch(url + path);

	const filteredConfig = {};
	for (let key in config) {
		if (key !== 'params') filteredConfig[key] = config[key];
	}

	if (!config.params) {
		return fetch(url + path, filteredConfig);
	} else {
		const fullUrl = constructUrlParams.call(this, path, config.params);
		return fetch(fullUrl, filteredConfig);
	}
};

const privateDataFetching = new WeakMap();
export default function FetchingData(url) {
	privateDataFetching.set(this, {
		url
	});
}

FetchingData.prototype.get = function (path, config) {
	if (config) Object.defineProperty(config, 'method', { value: 'GET' });
	return constructQuery.call(this, path, config || { method: 'GET' });
};
FetchingData.prototype.post = function (path, config) {
	if (config) Object.defineProperty(config, 'method', { value: 'POST' });
	return constructQuery.call(this, path, config || { method: 'POST' });
};
FetchingData.prototype.put = function (path, config) {
	if (config) Object.defineProperty(config, 'method', { value: 'PUT' });
	return constructQuery.call(this, path, config || { method: 'PUT' });
};
FetchingData.prototype.delete = function (path, config) {
	if (config) Object.defineProperty(config, 'method', { value: 'DELETE' });
	return constructQuery.call(this, path, config || { method: 'DELETE' });
};
