import { AxiosRequestConfig } from 'axios';
import apiConfig from './config';

export const get = async <Result>(
	url: string,
	config = {} as AxiosRequestConfig
): Promise<Result> => {
	const response = await apiConfig.get(url, config);
	return response.data;
};

export const post = async <Result, Data>(
	url: string,
	data: Data,
	config = {} as AxiosRequestConfig<Data>
): Promise<Result> => {
	const response = await apiConfig.post(url, data, config);
	return response.data;
};

export const put = async <Result, Data>(
	url: string,
	data: Data,
	config = {} as AxiosRequestConfig<Data>
): Promise<Result> => {
	const response = await apiConfig.put(url, data, config);
	return response.data;
};

export const del = async <Result>(
	url: string,
	config = {} as AxiosRequestConfig
): Promise<Result> => {
	const response = await apiConfig.delete(url, config);
	return response.data;
};
