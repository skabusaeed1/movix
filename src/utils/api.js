import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTkxODFjZGYxYjRhYzRmZGQ2MzI1ZTEwZmE2Yzg3OCIsInN1YiI6IjY0MDA1ZWJiN2E0ZWU3MDBiOTE3YmEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KoqfzarAGo8QZxtW8XQSqv1E95kg_LuLL-q_1oR_Uu8"
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
