import axios from "axios";
const BASE_URL = "https://youtube-v311.p.rapidapi.com";

// console.log(process.env.REACT_APP_RAPID_API_KEY);

const options = {
	params: {},
	headers: {
		"X-RapidAPI-Key": "3edc8003e2msh9119831df09b27ep16e34fjsn05262ffdf972",
		"X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};
