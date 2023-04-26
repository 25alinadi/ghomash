import axios from "axios"
import {APP_DEVICE, APP_API_URL } from "../constans/global";
import { getAuthToken } from "../helpers/authHelpers";
import {isNotEmpty} from "../helpers/functions";

const httpClient = () => {
    const axiosInstance = axios.create({
        baseURL: APP_API_URL,
    })
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = getAuthToken()
            config.headers!.Authorization =  token && isNotEmpty(token) ? `JWT ${token}` : '';
            config.headers!.Device = APP_DEVICE
            return config;
        },
        error => Promise.reject(error)
    )

    axiosInstance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            const res = error?.response
            if (res.status === 401 || res.status === 403) {
                return Promise.reject(error)
            }
            return Promise.reject(error)
        }
    )

    return axiosInstance;
}

export default httpClient
