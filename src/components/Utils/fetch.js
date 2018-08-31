// ES8 getJson function
const getJson = async ($text, skip, take) => {
	try {
		let response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${$text}&Skip=${skip}&Take=${take}`)
		let json = await response.json();
		return json.Data;
	} catch (error) {
		console.error(`readFile failed: ${error}`);
	}
}

export default getJson;
