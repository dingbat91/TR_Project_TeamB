interface Fetchparams {
	param: string;
	value: any;
}

export const APIFetch = async (
	URLExtension: string,
	APIkey: string,
	URLparams?: Fetchparams[]
) => {
	//Basic Fetch URL without params
	const url = `https://api.themoviedb.org/3${URLExtension}?api_key=${APIkey}`;
	let finalUrl = "";
	//reduce additional parameters to string

	if (URLparams !== undefined) {
		const additionalParams = URLparams.reduce((acc, { param, value }) => {
			return acc + `&${param}=${value}`;
		}, "");
		//create final URL params to Fetch
		finalUrl = `${url}${additionalParams}`;
	} else {
		finalUrl = encodeURI(url);
	}
	//Fetch data
	const json = await fetch(finalUrl)
		.then(async (reponse) => {
			const data = await reponse.json();
			return data;
		})
		.catch((err: Error) => {
			console.error(err.message);
			return err;
		});
	return json;
};
