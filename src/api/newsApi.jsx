import axios from "axios";

const BASE_URL = "https://newsdata.io/api/1/news";
const API_KEY = "pub_46795bb60b04ced25e0f5aae9d0f25d42995a"; // Replace with your actual API key

export const fetchArticles = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        q: query,
        language: "en", // Specify the language
        country: "us", // Specify the country
      },
    });
    console.log(response.data); // Console log the data
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    throw error;
  }
};
