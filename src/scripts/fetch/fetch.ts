interface Fetchparams {
	param: string;
	value: any;
}

/**
 * Fetches data from themoviedb.org API endpoint and returns to the user
 *
 * @param URLExtension - the extension over the base API for example: /movie/550
 * @param APIkey - your api key
 * @param URLparams array of url parameters to add to fetch request. For example [{param:Query, value:string}]
 * @returns Returns base object from the API parsed through response.json
 */
export const APIFetch = async (
	URLExtension: string,
	APIkey: string,
	URLparams?: Fetchparams[]
) => {
	//Basic Fetch URL without params
	const url = `https://api.themoviedb.org/3${URLExtension}?api_key=${APIkey}`;
	let finalUrl = "";
	//reduce additional parameters to string

	if (URLparams && URLparams.length) {
		const additionalParams = URLparams.reduce((acc, { param, value }) => {
			return acc + `&${param}=${value}`;
		}, "");
		//create final URL params to Fetch
		finalUrl = `${url}${additionalParams}`;
	} else {
		finalUrl = encodeURI(url);
	}
	//Fetch data
	const results = await fetch(finalUrl)
		.then(async (response) => {
			if (response.status === 200) {
				const data = await response.json();
				return data;
			}
			//if Missing API key
			if (response.status === 401) {
				throw new Error("Missing API key");
			}
			//If there is no data available
			if (response.status === 404) {
				const data = await response.json();
				return {
					Errormessage: data.status_message,
					Errorcode: data.statuscode,
				};
			}
		})
		.catch((err: Error) => {
			console.error(err.message);
			return err;
		});
	return results;
};
