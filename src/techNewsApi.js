const dotenv = require("dotenv").config();

const url = process.env.TECH_NEWS_API;

async function getNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getNews();
