import axios from "axios";

export const api = axios.create({
	baseURL: "http://127.0.0.1:8000/api/v1/",
	// baseURL: "http://192.168.50.101:8000/api/v1/",

});

export const setToken = (token) => {
	api.interceptors.request.use(function (config) {
		config.headers.authorization = `Bearer ${token}`;
		return config;
	});
};