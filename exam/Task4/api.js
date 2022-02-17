const axios = require("axios");

const apiUrl = "http://numbersapi.com/";

async function getUser(number) {
    let url = apiUrl + number;
    console.log("URL:", url);
    try {
        const response = await axios.get(url);

        return response;
    } catch (error) {
        console.error("Wywala sie", error);
    }
}

module.exports = getUser;
