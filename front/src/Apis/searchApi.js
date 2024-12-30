import axios from "axios";

const baseURL = "http://localhost:8080"

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const searchByYearMonth = date => instance.get("/main/yearMonth", {params: date});