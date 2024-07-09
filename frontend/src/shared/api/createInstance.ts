import axios, { AxiosInstance } from 'axios';

class AxiosSingleton {
	private static instance: AxiosInstance;

	private constructor() {}

	public static getInstance(): AxiosInstance {
		if (!AxiosSingleton.instance) {
			AxiosSingleton.instance = axios.create({
				baseURL: import.meta.env.VITE_BASE_URL,
			});
		}
		return AxiosSingleton.instance;
	}
}

export const axiosInstance = AxiosSingleton.getInstance();
