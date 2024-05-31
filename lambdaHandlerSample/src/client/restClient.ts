import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class RestClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
        const url = `${this.baseUrl}${path}`;
        const response: AxiosResponse<T> = await axios.get(url, config);
        return response.data;
    }

    public async post<T>(path: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        const url = `${this.baseUrl}${path}`;
        const response: AxiosResponse<T> = await axios.post(url, data, config);
        return response.data;
    }

    // Add more methods for other HTTP verbs (e.g., PUT, DELETE) as needed

}

export default RestClient;