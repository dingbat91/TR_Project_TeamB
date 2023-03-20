interface Fetchparams {
	param: string;
	value: any;
}

export const APIFetch = async (
	URLExtension: string,
	APIkey: string,
	URLparams: Fetchparams[]
) => {
	//Basic Fetch URL without params
	const url = `https://api.themoviedb.org/3/${URLExtension}/?api_key=${APIkey}`;
	//reduce additional parameters to string
	const additionalParams = URLparams.reduce((acc, { param, value }) => {
		return acc + `&${param}=${value}`;
	}, "");
	//create final URL params to Fetch
	const finalUrl = `${url}${additionalParams}`;

	//Fetch data
	await fetch(finalUrl)
		.then((reponse) => {
			const data = reponse.json();
			return data;
		})
		.catch((err) => {
			return err;
		});
};
